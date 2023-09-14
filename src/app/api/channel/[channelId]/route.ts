import { NextRequest } from 'next/server'

async function fetchAllPosts(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/posts/channel/${id}`,
      {
        cache: 'no-cache',
      },
    )

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }

    const posts = await response.json()
    return posts
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`Failed to fetch posts: ${error.message}`)
  }
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.replace('/api/channel/', '')
  try {
    const posts = await fetchAllPosts(id)
    return new Response(JSON.stringify({ posts }), { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
  }
}
