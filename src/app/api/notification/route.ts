import { NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function GET(_request: Request) {
  const { token } = useServerCookie()
  try {
    const { data } = await apiServer.get(`/notifications`, {
      headers: {
        Authorization: 'Bearer ' + token,
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
