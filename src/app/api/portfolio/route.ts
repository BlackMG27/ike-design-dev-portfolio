import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(req:NextRequest){
  try{
    const {data: portfolio_projects, error} = await supabase
    .from('portfolio_project')
    .select('*')
    .order('created_at', {ascending: false})

    if(error){return NextResponse.json({error}, {status: 500})}

    return NextResponse.json({portfolio_projects})
    
  }catch(error){
    console.error('Caught an error', error)
    return NextResponse.json({
      error: "Internal Server Error",
      details: error instanceof Error ? error.message : 'Unknown Error'
    }, {status: 500})
  }
}