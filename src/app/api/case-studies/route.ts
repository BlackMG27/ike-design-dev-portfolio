import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(req:NextRequest){
  try{
    const{data: caseStudies, error} = await supabase
    .from('case_study')
    .select('*')
    .order('created_at', {ascending: false})

    if(error){
      return NextResponse.json({
        error},
        {status: 500}
      )
    }
    return NextResponse.json({caseStudies})
  }catch(error){
    console.error('❌ GET Error:', error)
    return NextResponse.json({
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unknown Error'
      },
      {status: 500}
    )
  }
}

export async function POST(req:NextRequest){
  try{
    console.log('POST Request Received')
      return NextResponse.json({
        message: "POST API Route Works",
        method: "POST",
        timestamp: new Date().toISOString(),
        status: 'success'
      }
    )
  }catch(error){
    console.error('There was an error', error)
    return NextResponse.json({
      error: "There was an internal server error",
      details: error instanceof Error ? error.message : 'Unknown Error'
      }, {status: 500}
    )
  }
}