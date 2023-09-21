import { NextRequest, NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

async function fetchPostDetail(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/posts/${id}`,
      {
        cache: 'no-cache',
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
    const postDetail = await fetchPostDetail(id)
    return new Response(JSON.stringify({ post: postDetail }), { status: 200 })
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
