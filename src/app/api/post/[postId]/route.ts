import { NextRequest, NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'
import Post from '@/types/post'

async function fetchPostDetail(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/posts/${id}`,
      {
        cache: 'no-store',
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

    if (foreign_postDetail_key) {
      //기존 포스트와 대응하는 싫어요 채널의 포스트
      const dislikePostDetail: Post = await fetchPostDetail(
        foreign_postDetail_key,
      )
      return new Response(
        JSON.stringify({ post: postDetail, disLikePost: dislikePostDetail }),
        { status: 200 },
      )
    }

    return new Response(JSON.stringify({ post: postDetail }))
  } catch (error) {
    if (error instanceof Error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.replace('/api/post/', '')
  const body = JSON.stringify({
    id,
  })

  const { token } = useServerCookie()
  try {
    const { data } = await apiServer.delete(`/posts/delete`, {
      data: body,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
