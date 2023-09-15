import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'
import { apiClient } from '@/lib/axios'

export async function GET(_request: Request) {
  try {
    const { data } = await apiClient.get(
      `${Environment.baseUrl()}/users/get-users`,
    )

    return new Response(JSON.stringify(data))
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
