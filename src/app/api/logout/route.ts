import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiClient } from '@/lib/axios'

export async function POST(_request: Request) {
  const { token } = useServerCookie()

  try {
    const { data } = await apiClient.post(`${Environment.baseUrl()}/logout`, {
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
