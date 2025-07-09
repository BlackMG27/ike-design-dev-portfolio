import { signIn } from "../../../../auth";

export default function SignIn(){
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
        
        <div className="space-y-4">
          <form
            action={async () => {
              "use server"
              await signIn("github")
            }}
          >
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
            >
              {/* <GitHubIcon /> */}
              Continue with GitHub
            </button>
          </form>
          
          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              {/* <GoogleIcon /> */}
              Continue with Google
            </button>
          </form>
          
          <form
            action={async () => {
              "use server"
              await signIn("discord")
            }}
          >
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2"
            >
              {/* <DiscordIcon /> */}
              Continue with Discord
            </button>
          </form>
        </div>
        
        <p className="text-sm text-gray-600 text-center mt-6">
          Sign in to comment on blog posts
        </p>
      </div>
    </div>
  )
}