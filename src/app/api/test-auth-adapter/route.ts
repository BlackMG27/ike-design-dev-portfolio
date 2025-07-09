import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(){
  try{
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    console.log("Testing user creation...")
    const {data: user, error: userError} = await supabase
    .from('users')
    .insert([{
      name: 'Test User Auth',
      email: 'testuser@example.com',
      image: 'https://github.com/testuser.png'
    }])
    .select()
    .single()

    if(userError){
      return NextResponse.json({
        step: 'user creation',
        error: userError.message,
        success: false
      })
    }

    console.log('User created', user)
    // Test 2: Create an account (like Auth.js would)
    console.log('Testing account creation...')
    const { data: account, error: accountError } = await supabase
      .from('accounts')
      .insert([{
        user_id: user.id,
        type: 'oauth',
        provider: 'github',
        provider_account_id: '12345',
        access_token: 'fake_token',
        token_type: 'bearer',
        scope: 'user:email'
      }])
      .select()
      .single()

    if (accountError) {
      // Clean up user
      await supabase.from('users').delete().eq('id', user.id)
      return NextResponse.json({
        step: 'account_creation',
        success: false,
        error: accountError.message
      })
    }

    console.log('Account created:', account)

    // Test 3: Create a session (like Auth.js would)
    console.log('Testing session creation...')
    const { data: session, error: sessionError } = await supabase
      .from('sessions')
      .insert([{
        user_id: user.id,
        session_token: 'test_session_token_' + Date.now(),
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
      }])
      .select()
      .single()

    if (sessionError) {
      // Clean up
      await supabase.from('accounts').delete().eq('id', account.id)
      await supabase.from('users').delete().eq('id', user.id)
      return NextResponse.json({
        step: 'session_creation',
        success: false,
        error: sessionError.message
      })
    }

    console.log('Session created:', session)

    // Clean up test data
    await supabase.from('sessions').delete().eq('id', session.id)
    await supabase.from('accounts').delete().eq('id', account.id)
    await supabase.from('users').delete().eq('id', user.id)

    return NextResponse.json({
      success: true,
      message: 'All Auth.js adapter operations work!',
      tests: {
        user_creation: '✅',
        account_creation: '✅',
        session_creation: '✅',
        cleanup: '✅'
      }
    }) 
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      step: 'general_error'
    })
  }
}