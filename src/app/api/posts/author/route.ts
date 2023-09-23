import { NextRequest, NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { apiServer } from '@/lib/axiosSever'
import type Post from "@/types/post"

export async function GET(req: NextRequest) {
  const authorId = req.nextUrl.searchParams.get('authorId') ?? 'undefined'
  const limit = Number(req.nextUrl.searchParams.get('limit'))
  const offset = Number(req.nextUrl.searchParams.get('offset'))

  try {
    const { data } = await apiServer.get(
      `/posts/author/${authorId}?offset=${offset}&limit=${limit}`,
    )

    const targetPosts = data.filter(
      (post: Post) => post.channel._id === Environment.channelId(),
    )
    
    const parsedPosts = targetPosts.map((post: Post) => {
      const parsedArticle = JSON.parse(post.title)
      if (parsedArticle) {
        return {
          ...post,
          title: parsedArticle.title,
          description: parsedArticle.description,
          mapping_ID: parsedArticle.mapping_ID,
        }
      } else {
        return {
          ...post,
          description: '',
        }
      }
    })
    return NextResponse.json(parsedPosts)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
