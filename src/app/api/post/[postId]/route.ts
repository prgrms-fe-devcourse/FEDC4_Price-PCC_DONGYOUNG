import { NextRequest } from 'next/server'
import Post from '@/types/post'

async function fetchPostDetail(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/posts/${id}`,
      {
        cache: 'no-cache',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      },
    )

    if (!response.ok) {
      throw new Error(
        `Failed to fetch post details. Status: ${response.status}`,
      )
    }

    const postDetail = await response.json()
    return postDetail
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`Failed to fetch post details: ${error.message}`)
  }
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.replace('/api/post/', '')

  try {
    //기존 포스트
    const postDetail: Post = await fetchPostDetail(id)
    const foreign_postDetail_key = JSON.parse(postDetail.title).mapping_ID

    //기존 포스트와 대응하는 싫어요 채널의 포스트
    const dislikePostDetail: Post = await fetchPostDetail(
      foreign_postDetail_key,
    )

    return new Response(
      JSON.stringify({ post: postDetail, disLikePost: dislikePostDetail }),
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof Error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
  }
}
