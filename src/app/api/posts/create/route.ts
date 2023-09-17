import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function POST(request: Request) {
  const formData = await request.formData()
  const channelId = Environment.channelId()
  formData.append('channelId', channelId)
  const { token } = useServerCookie()

  const { data } = await apiServer.post(`/posts/create`, formData, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'multipart/form-data',
    },
  })

  return NextResponse.json(data)
}
