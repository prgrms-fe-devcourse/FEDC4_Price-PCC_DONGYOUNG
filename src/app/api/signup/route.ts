import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { apiClient } from '@/lib/axios'

export async function POST(request: Request) {
  const body = await request.json()
  try {
    const { data } = await apiClient.post(
      `${Environment.baseUrl()}/signup`,
      body,
    )
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
