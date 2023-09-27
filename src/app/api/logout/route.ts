import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { constants } from '@/config/constants'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function POST(_request: Request) {
  const { token } = useServerCookie()
  const cookieStore = cookies()

  try {
    const { data } = await apiServer.post(`/logout`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    cookieStore.delete(constants.AUTH_TOKEN)
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
