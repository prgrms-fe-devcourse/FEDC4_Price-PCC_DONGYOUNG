import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { constants } from '@/config/constants'
import { Environment } from '@/config/environments'
import { apiClient } from '@/lib/axios'

export async function POST(request: Request) {
  const { title, image } = await request.json()
  const channelId = Environment.channelId()

  const cookieStore = cookies()
  const token = JSON.parse(cookieStore.get(constants.AUTH_TOKEN)?.value!)

  const { data } = await apiClient.post(
    `${Environment.baseUrl()}/posts/create`,
    {
      title: JSON.stringify(title),
      image,
      channelId,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )

  return NextResponse.json(data)
}
