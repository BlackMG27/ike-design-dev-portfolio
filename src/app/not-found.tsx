import Link from "next/link";


export default function NotFound(){
  return(
    <>
      <h1>404</h1>
      <h3>Oh No!</h3>
      <p>The page you were looking for does not exist. Please return to the Home Page</p>
      <button>
        <Link href='/'>
          Home
        </Link>
      </button>
    </>
  )
}