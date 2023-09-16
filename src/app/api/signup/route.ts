import { NextResponse } from 'next/server'
import { apiServer } from '@/lib/axiosSever'

export async function POST(request: Request) {
  const body = await request.json()
  try {
    const { data } = await apiServer.post(`/signup`, body)
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
