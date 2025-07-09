import { supabase } from "@/app/lib/supabase";
import { auth } from "../../../../auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  const session = await auth()

  //require authentication for commenting 
  if(!session?.user){
    return NextResponse.json(
      {error: 'Must be signed in to comment'}, {status: 401})
  }

  try{

    const {blogPostId, content} = await req.json()

    const{data: comment, error} = await supabase
      .from('blog_comments')
      .insert({
        blog_post_id: blogPostId,
        user_id: session.user.id,
        content,
        approved: false //admin needs to approve comment
      })
      .select()
      .single()

      if(error) throw error
      return NextResponse.json({comment})
  }catch(error){
    return NextResponse.json(
      {error: `Failed to create comment: ${error} `},
      {status: 500}
    )
  }
}