import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(req:NextRequest){
  try{
    const{data: blogPosts, error} = await supabase
    .from('blog_post')
    .select('*')
    .order('created_at', {ascending: false})

    if(error){
      return NextResponse.json({error}, {status: 500})
    }
    return NextResponse.json({blogPosts})
  }catch(error){
    console.error('❌ GET Error:', error)
    return NextResponse.json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : 'Unknown Error'
    })
  }
}