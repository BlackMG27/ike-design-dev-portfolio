// Let's create a debugging test for the exact SupabaseAdapter operation
console.log("Creating test to debug SupabaseAdapter query...")


// app/api/debug-adapter-query/route.ts
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: { autoRefreshToken: false, persistSession: false }
      }
    )

    console.log('Testing the exact SupabaseAdapter getUserByAccount query...')
    
    // This is the exact query the SupabaseAdapter tries to do
    const { data, error } = await supabase
      .from('accounts')
      .select(`
        provider,
        "providerAccountId",
        userId,
        users (
          id,
          name,
          email,
          image,
          email_verified
        )
      `)
      .eq('provider', 'github')
      .eq('providerAccountId', '8186445')
      .maybeSingle()

    console.log('Query result:', { data, error })

    if (error) {
      // Try a simpler query to see what's wrong
      const { data: simple, error: simpleError } = await supabase
        .from('accounts')
        .select('*')
        .limit(5)

      return NextResponse.json({
        success: false,
        adapterQueryError: error.message,
        simpleQueryWorks: !simpleError,
        simpleData: simple,
        hint: 'Complex join query failing, simple query result above'
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Adapter query works!',
      found: !!data,
      data
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      step: 'general_error'
    })
  }
}


console.log("Test file content created. This will help us see exactly what's failing in the adapter query.");
console.log("Save this as: app/api/debug-adapter-query/route.ts");