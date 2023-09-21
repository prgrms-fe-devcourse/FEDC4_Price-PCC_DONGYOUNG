import { NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function PUT(_request: Request) {
  const { token } = useServerCookie()

  try {
    await apiServer.put(`/notifications/seen`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
