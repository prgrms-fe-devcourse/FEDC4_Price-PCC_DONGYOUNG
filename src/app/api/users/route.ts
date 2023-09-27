import { NextResponse } from 'next/server'
import { apiServer } from '@/lib/axiosSever'

export async function GET(_request: Request) {
  try {
    const { data } = await apiServer.get(`/users/get-users`)

    return new Response(JSON.stringify(data))
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
