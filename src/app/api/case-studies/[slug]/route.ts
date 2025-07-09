import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(
  req:NextRequest, {params}: {params: {slug:string}}
){
  try{
    const {slug} = params

    const {data: caseStudy, error} = await supabase
      .from('case_study')
      .select('*')
      .eq('slug', slug)
      .single()

      if(error){
        return NextResponse.json(
          {error: 'Page not Found'},
          {status: 404}
        )
      }
      return NextResponse.json({caseStudy})
  }catch(error){
    return NextResponse.json(
      {error: `Internal SErver Error: ${error}`},
      {status: 500}
    )
  }
}