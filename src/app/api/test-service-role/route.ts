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
            persistSession: false,
          }
        }
      )

      const {data, error} = await supabase
        .from('users')
        .insert([{
          name: 'Test User',
          email: 'test@example.com',
          role: 'user'
        }])
        .select()

        if(error){
          return NextResponse.json({
            success: false,
            error: `Error message: ${error.message}`,
            hint: 'Service Role Key might be wrong'
          })
        }
        await supabase.from('users').delete().eq('email', 'test@emaple.com')
        return NextResponse.json({
            success: true,
            message: "Service Role Key is working!",
            testData: data
        })

  }catch(error){
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Check Environment Variables'
    })
  }
}