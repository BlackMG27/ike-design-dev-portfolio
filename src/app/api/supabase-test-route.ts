import { supabase } from "../lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req:NextRequest, res:NextResponse){
  try{
    const {data: projects, error: projectError} = await supabase.from('portfolio_project')
    .select("*")
    .limit(5)

    if(req.method === "POST"){
      const {data: newProjects, error: insertError} = await supabase
      .from('portfolio_project')
      .insert([{
          title: "First Portfolio Project",
          slug: "first-portfolio-project",
          description: "This is test to see if Supabase is working",
          hero_image_url: 'https://via.placeholder.com/800x600'
      }]).select()

      if(insertError){
        return res.status(500).json({error: insertError.message})
      }

      return res.status(201).json({
        message: 'Project added successfully!',
        project: newProjects[0]
      })
    }

    const {data: blogPosts, error: blogError} = await supabase
    .from('blog_post')
    .select('*')
    .limit(5)

    if(projectError || blogError){
      return res.status(500).json({
        error: projectError?.message || blogError?.message
      })
    }

    return res.status(200).json({
          message: "Supabase Database Is Connected!",
          data: {
            portfolio: projects || [],
            blogPosts: blogPosts || [],
            tablesFound: {
              portfolio: !projectError,
              blogPosts: !blogError
            }
          }
        })
  }catch(error){
    let errorMessage = "Failed to Connect"
      if(error instanceof Error){
        errorMessage = error.message
      }
      return res.status(500).json({
        error: errorMessage
      })
  }
}