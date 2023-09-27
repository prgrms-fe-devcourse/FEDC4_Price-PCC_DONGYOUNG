import { NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function POST(request: Request) {
  const body = await request.json()
  const { token } = useServerCookie()
  try {
    const { data } = await apiServer.delete(`/follow/delete`, {
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
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
