import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'
import Post from '@/types/post'

export async function POST(request: Request) {
  const { token } = useServerCookie()
  const { channelId, dislikeChannelID } = Environment

  const createPost = async (
    formData: FormData,
    channelId: string,
    relative_ID?: string,
  ): Promise<Post> => {
    if (formData.has('channelId')) {
      formData.delete('channelId')
    }
    formData.append('channelId', channelId)
    if (relative_ID) {
      const getTitleField = JSON.parse(formData.get('title') as string)
      getTitleField.mapping_ID = relative_ID
      formData.set('title', JSON.stringify(getTitleField))
    }

    const { data } = await apiServer.post('/posts/create', formData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    })

    return data
  }

  const formData = await request.formData()

  const results = await createPost(formData, channelId()).then(
    async (res) => await createPost(formData, dislikeChannelID(), res._id),
  )

  return NextResponse.json(results)
}
