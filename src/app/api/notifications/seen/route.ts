import { NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function PUT(_request: Request) {
  const { token } = useServerCookie()
  try {
    const { data } = await apiServer.put(
      `/notifications/seen`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )

    return new Response(JSON.stringify(data))
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
