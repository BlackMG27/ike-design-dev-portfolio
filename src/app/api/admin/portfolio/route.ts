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

    const{data: project, error} = await supabase
      .from('portfolio_project')
      .insert([body])
      .select()
      .single()

      if(error) throw error
      return NextResponse.json({project})
  }catch(error){
    return NextResponse.json(
      {error:`Failed to create project: ${error}`},
      {status: 500}
    )
  }
}