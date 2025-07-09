import { auth } from "../../../../../auth";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function POST(req: NextRequest){
  const session = await auth()

  //check if the user is admin
  if(!session?.user || session.user.role !== 'admin'){
    return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  }

  try{
    const body = await req.json()

    const{data: blogPost, error} = await supabase
      .from('blog_post')
      .insert([body])
      .select()
      .single()

      if(error) throw error
      return NextResponse.json({blogPost})
  }catch(error){
    return NextResponse.json(
      {error:`Failed to create blog post: ${error}`},
      {status: 500}
    )
  }


}