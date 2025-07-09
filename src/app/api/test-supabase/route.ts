
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
  try{
      console.log('🔍 GET request received')
    return NextResponse.json({
      message: "Supabase API Route Works!",
      method: 'GET',
      timestamp: new Date().toISOString(),
      status: 'success'
    })
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

export async function POST(req: NextRequest){
  try{
    console.log('🔍 POST request received')
    return NextResponse.json({
      message: "Supabase POST API Route Works!",
      method: 'POST',
      timestamp: new Date().toISOString(),
      status: 'success'
    })
  }catch(error){
    console.error('❌ POST Error:', error)
    return NextResponse.json({
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unknown Error'
      },
      {status: 500}
    )
  }
}









