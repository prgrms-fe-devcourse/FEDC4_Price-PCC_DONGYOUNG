import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { constants } from '@/config/constants'
import { apiServer } from '@/lib/axiosSever'

export async function POST(request: Request) {
  const body = await request.json()
  try {
    const { data } = await apiServer.post(`/signup`, body)
    const token = data.token
    const cookieStore = cookies()

    cookieStore.set(constants.AUTH_TOKEN, token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
