import { useState } from "react";

type TestResult = {
  message?: string,
  timestamp?: string,
  results?: {
    projects?: {
      success?: boolean,
      count?: number,
      data?: {
        title?: string,
        slug?: string,
        id?: string
      },
      error: string | null
    },
    blogPosts?:{
      success?: boolean,
      count?: number,
      data: unknown[],
      error: string | null
    },
    caseStudies?:{
      success?: boolean,
      count?: number,
      data: unknown[],
      error: string | null
    }
  },
  overallStatus?: string,
  error?: string | null,
  project?: unknown
} | null

export default function SupabaseTest(){
  const [result, setResult] = useState<TestResult>()
  const [loading, setLoading] = useState(false)


  const testConnection = async () => {
    setLoading(true)
    try{
      const response = await fetch('/api/test-supabase')
      const data = await response.json()
      setResult(data)
    }catch(error){
      let errorMessage = "Failed to Connect"
      if(error instanceof Error){
        errorMessage = error.message
      }
      setResult({error: errorMessage})
    }
    setLoading(false)
  }

  const createProject = async() => {
    setLoading(true)
    try{
        const response = await fetch('../../api/test-supabase', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()
        setResult(data)
    }catch(error){
      let errorMessage = "Failed to Connect"
      if(error instanceof Error){
        errorMessage = error.message
      }
      setResult({error: errorMessage})
    }
    setLoading(false)
  }
  
  return(
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Supabase Connection Test</h2>
      
      <div className="space-x-2 mb-4">
        <button 
          onClick={testConnection}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? 'Testing...' : 'Test Connection'}
        </button>
        
        <button 
          onClick={createProject}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {loading ? 'Creating...' : 'Create Test Project'}
        </button>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Test Results:</h3>
            <div className="text-sm space-y-2">
              <div><strong>Status:</strong> {result.overallStatus || 'Unknown'}</div>
              <div><strong>Message:</strong> {result.message}</div>
              <div><strong>Timestamp:</strong> {result.timestamp}</div>
            </div>
          </div>

          {result.results && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border">
                <h4 className="font-semibold text-sm">Projects Table</h4>
                <div className="text-xs mt-1">
                  <div>Success: {result?.results?.projects?.success ? '✅' : '❌'}</div>
                  <div>Count: {result?.results?.projects?.count}</div>
                  {result?.results?.projects?.error && (
                    <div className="text-red-600">Error: {result.results.projects.error}</div>
                  )}
                </div>
              </div>

              <div className="bg-white p-3 rounded border">
                <h4 className="font-semibold text-sm">Blog Posts Table</h4>
                <div className="text-xs mt-1">
                  <div>Success: {result?.results?.blogPosts?.success ? '✅' : '❌'}</div>
                  <div>Count: {result?.results?.blogPosts?.count}</div>
                  {result?.results?.blogPosts?.error && (
                    <div className="text-red-600">Error: {result?.results?.blogPosts?.error}</div>
                  )}
                </div>
              </div>

              <div className="bg-white p-3 rounded border">
                <h4 className="font-semibold text-sm">Case Studies Table</h4>
                <div className="text-xs mt-1">
                  <div>Success: {result?.results?.caseStudies?.success ? '✅' : '❌'}</div>
                  <div>Count: {result?.results?.caseStudies?.count}</div>
                  {result?.results?.caseStudies?.error && (
                    <div className="text-red-600">Error: {result.results.caseStudies.error}</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {result.error && (
            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="text-red-700 font-semibold">Error:</div>
              <div className="text-red-600 text-sm">{result.error}</div>
            </div>
          )}

          {result?.results?.projects && (
            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <div className="text-green-700 font-semibold">Project Created:</div>
              <div className="text-green-600 text-sm">
                <div>Title: {result?.results?.projects?.data?.title}</div>
                <div>Slug: {result?.results?.projects?.data?.slug}</div>
                <div>ID: {result?.results?.projects?.data?.id}</div>
              </div>
            </div>
          )}

          <details className="bg-gray-50 p-3 rounded">
            <summary className="cursor-pointer font-medium">Raw JSON Data</summary>
            <pre className="mt-2 text-xs overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  )

}