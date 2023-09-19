import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function PUT(request: Request) {
  const formData = await request.formData()
  const channelId = Environment.channelId()
  formData.append('channelId', channelId)

  const { token } = useServerCookie()
  try {
    const { data } = await apiServer.put(`/posts/update`, formData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
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
