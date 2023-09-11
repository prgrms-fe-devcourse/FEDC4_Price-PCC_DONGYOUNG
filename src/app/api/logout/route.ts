import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { apiClient } from '@/lib/axios'

export async function POST(request: Request) {
  const body = await request.json()
  const { token } = body
  const { data } = await apiClient.post(`${Environment.baseUrl()}/logout`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return NextResponse.json(data)
}
