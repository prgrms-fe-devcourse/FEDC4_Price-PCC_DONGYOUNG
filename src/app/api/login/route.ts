import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { constants } from '@/config/constants'
import { apiServer } from '@/lib/axiosSever'

export async function POST(request: Request) {
  const body = await request.json()
  const cookieStore = cookies()
  try {
    const { data } = await apiServer.post(`/login`, body)
    const token = data.token

    cookieStore.set(constants.AUTH_TOKEN, token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data },
      { status: error.response.status },
    )
  }
}
