import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'
import Post from '@/types/post'

export async function POST(request: Request) {
  const { token } = useServerCookie()
  const { channelId, likeChannelId, dislikeChannelID } = Environment
  const channelIds = [channelId(), likeChannelId(), dislikeChannelID()]

  const createPost = async (
    formData: FormData,
    channelId: string,
  ): Promise<Post> => {
    if (formData.has('channelId')) {
      formData.delete('channelId')
    }
    formData.append('channelId', channelId)

    const { data } = await apiServer.post('/posts/create', formData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    })

    return data
  }

  const formData = await request.formData()

  const apiCallPromises = []

  for (const channelId of channelIds) {
    apiCallPromises.push(createPost(formData, channelId))
  }

  console.log(apiCallPromises)

  const results = await Promise.all(apiCallPromises)

  return NextResponse.json(results[0])
}
