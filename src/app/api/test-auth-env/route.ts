import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.json({
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasServiceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasGitHubId: !!process.env.AUTH_GITHUB_ID,
    hasGitHubSecret: !!process.env.AUTH_GITHUB_SECRET,
    hasAuthSecret: !!process.env.AUTH_SECRET,
    hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
    
    // Show lengths (not actual values for security)
    supabaseUrlLength: process.env.NEXT_PUBLIC_SUPABASE_URL?.length || 0,
    serviceRoleLength: process.env.SUPABASE_SERVICE_ROLE_KEY?.length || 0,
    nodeEnv: process.env.NODE_ENV,
  })
}