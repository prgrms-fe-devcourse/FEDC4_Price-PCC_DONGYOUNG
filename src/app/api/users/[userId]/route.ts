import { NextRequest, NextResponse } from 'next/server'
import { apiServer } from '@/lib/axiosSever'

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.pathname.replace('/api/users/', '')

  try {
    const { data } = await apiServer.get(`/users/${userId}`)
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
