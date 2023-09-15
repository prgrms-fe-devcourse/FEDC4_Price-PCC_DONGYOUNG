import { NextRequest } from 'next/server'
import Post from '@/types/post'

async function getAllPosts(id: string) {
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
    const posts = await getAllPosts(id)

    const parsedPosts = posts.map((post: Post) => {
      if (JSON.parse(post.title)) {
        return {
          ...post,
          title: JSON.parse(post.title).title,
          description: JSON.parse(post.title).description,
        }
      } else {
        return {
          ...post,
          description: '',
        }
      }
    })
    return new Response(JSON.stringify({ posts: parsedPosts }), { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
  }
}
