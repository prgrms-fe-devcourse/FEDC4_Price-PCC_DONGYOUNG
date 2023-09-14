import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiClient } from '@/lib/axios'

export async function GET(_request: Request) {
  const { token } = useServerCookie()
  try {
    const { data } = await apiClient.get(`${Environment.baseUrl()}/auth-user`, {
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
