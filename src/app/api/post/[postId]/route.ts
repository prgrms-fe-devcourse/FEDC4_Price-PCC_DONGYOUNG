import { NextRequest } from 'next/server'
import { getPostDetail } from '@/services/post'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.replace('/api/post/', '')
  const postDetail = await getPostDetail(id)

  return new Response(JSON.stringify({ post: postDetail }))
}
