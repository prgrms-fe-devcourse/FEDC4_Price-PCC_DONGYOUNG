import { NextRequest } from 'next/server'
import { Environment } from '@/config/environments'
import Post from '@/types/post'

async function getAllPosts(id: string, offset?: string, limit?: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/posts/channel/${id}?offset=${offset}&limit=${limit}`,
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
  const id = Environment.channelId()
  const disLikeChannelId = Environment.dislikeChannelID()
  const { searchParams } = req.nextUrl
  const offset = searchParams.get('offset') as string
  const limit = searchParams.get('limit') as string
  try {
    const posts = await getAllPosts(id || '', offset, limit)
    const disLikesPosts = await getAllPosts(disLikeChannelId || '')

    const parsedPosts = posts.map((post: Post) => {
      const parsedArticle = JSON.parse(post.title)
      const findDisLikesMappingPost =
        disLikesPosts.filter(
          (post: Post) => post._id === parsedArticle.mapping_ID,
        )[0]?.likes || []
      if (parsedArticle) {
        return {
          ...post,
          title: parsedArticle.title,
          description: parsedArticle.description,
          mapping_ID: parsedArticle.mapping_ID,
          disLikes: findDisLikesMappingPost,
        }
      } else {
        return {
          ...post,
          description: '',
        }
      }
    })
    return new Response(JSON.stringify(parsedPosts), { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
  }
}
