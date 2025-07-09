import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import {SupabaseAdapter} from '@auth/supabase-adapter'
//import { supabase } from "@/app/lib/supabase";


export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    GitHub({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET
  })
    , Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }), 
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET
    })
  ],
  // adapter: SupabaseAdapter({
  //   url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   secret: process.env.SUPABASE_SERVICE_ROLE_KEY!
  // }),
  callbacks: {
    async session({session, token}){
      if (session?.user?.email === 'oike279@gmail.com') {
        session.user.role = 'admin'
      } else {
        session.user.role = 'user'
      }
      return session
    },
    async jwt({token, account, profile}){
      return token
    }
},
  debug: true,
  trustHost: true,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/error'
  }
})