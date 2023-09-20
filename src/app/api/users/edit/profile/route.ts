import { NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function PUT(request: Request) {
  const body = await request.json()
  const { token } = useServerCookie()

  try {
    const { data } = await apiServer.put(`/settings/update-user`, body, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    return new Response(JSON.stringify(data))
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const { token } = useServerCookie()

  try {
    const { data } = await apiServer.post(`/users/upload-photo`, formData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    })

    return new Response(JSON.stringify(data))
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
