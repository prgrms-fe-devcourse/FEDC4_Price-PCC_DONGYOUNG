import { NextRequest } from 'next/server'

async function fetchPostDetail(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}/posts/${id}`,
    {
      cache: 'no-cache',
    },
  )

  const postDetail = await response.json()
  return postDetail
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.replace('/api/post/', '')
  const postDetail = await fetchPostDetail(id)

  return new Response(JSON.stringify({ post: postDetail }))
}
