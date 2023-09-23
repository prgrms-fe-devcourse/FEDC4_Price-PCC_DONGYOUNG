import { NextRequest, NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { apiServer } from '@/lib/axiosSever'
import Post from '@/types/post'

export async function GET(req: NextRequest) {
  const authorId = req.nextUrl.searchParams.get('authorId') ?? 'undefined'
  const limit = Number(req.nextUrl.searchParams.get('limit'))
  const offset = Number(req.nextUrl.searchParams.get('offset'))

  try {
    const { data } = await apiServer.get(
      `/posts/author/${authorId}?offset=${offset}&limit=${limit}`,
    )

    //기존 채널의 포스트
    const baseChannelPosts = data.filter(
      (post: Post) => post.channel._id === Environment.channelId(),
    )
    //싫어요 채널의 포스트
    const disLikeChannelPosts = data.filter(
      (post: Post) => post.channel._id === Environment.dislikeChannelID(),
    )

    //기존 채널의 포스트와 싫어요 채널의 포스트 연결된 포스트
    const updatedPosts = baseChannelPosts.map((post: Post) => {
      return {
        ...post,
        disLikes: disLikeChannelPosts.filter(
          (disLikeChannelPost: Post) =>
            disLikeChannelPost._id === post.mapping_ID,
        )[0].likes,
      }
    })
    return NextResponse.json(updatedPosts)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
