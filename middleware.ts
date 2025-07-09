export {auth as middleware} from './auth'
import {auth} from './auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const {pathname} = req.nextUrl;

  //admin route protection
  if(pathname.startsWith('/admin')){
    if(!req.auth?.user){
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }
    if(req.auth.user.role !== 'admin'){
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
  }
  //protects the api routes
  if(pathname.startsWith('/api/admin')){
    if(!req.auth?.user || req.auth?.user.role !== 'admin'){
      return NextResponse.json({error: 'Unauthorized'}, {status: 401})
    }
  }
  return NextResponse.next
})

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
}