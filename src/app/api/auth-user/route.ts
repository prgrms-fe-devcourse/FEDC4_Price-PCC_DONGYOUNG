import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { constants } from '@/config/constants'
import { Environment } from '@/config/environments'
import { apiClient } from '@/lib/axios'

export async function GET(_request: Request) {
  const cookieStore = cookies()
  const token = JSON.parse(cookieStore.get(constants.AUTH_TOKEN)?.value!)

  const { data } = await apiClient.get(`${Environment.baseUrl()}/auth-user`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return NextResponse.json(data)
}
