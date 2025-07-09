import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(req: NextRequest, {params}: {params: {slug:string}}){
  try{
    const {slug} = params
    const {data: project, error} = await supabase
      .from('portfolio_project')
      .select('*')
      .eq('slug', slug)
      .single()

      if(error){
        return NextResponse.json(
          {error: 'Page Not Found'},
          {status: 404}
        )
      }

      return NextResponse.json({project})

  }catch(error){
    return NextResponse.json(
      {error: `Internal Server Error: ${error}`}, 
      {status: 500}
    )
  }
}