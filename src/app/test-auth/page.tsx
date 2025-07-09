import { auth } from "../../../auth"

export default async function TestAuth() {
  const session = await auth()
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Auth Test</h1>
      {session ? (
        <div className="bg-green-50 p-4 rounded">
          <p><strong>Signed in as:</strong> {session.user?.name}</p>
          <p><strong>Email:</strong> {session.user?.email}</p>
          <p><strong>Role:</strong> {session.user?.role}</p>
          <p><strong>Image:</strong> {session.user?.image}</p>
        </div>
      ) : (
        <div className="bg-red-50 p-4 rounded">
          <p>Not signed in</p>
        </div>
      )}
    </div>
  )
}