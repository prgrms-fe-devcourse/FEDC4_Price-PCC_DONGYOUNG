import { NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function POST(_request: Request) {
  const { token } = useServerCookie()
  const { postId, userId, notificationTypeId, notificationType } =
    await _request.json()
  try {
    const { data } = await apiServer.post(
      `/notifications/create`,
      {
        postId,
        notificationType,
        notificationTypeId,
        userId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )
    console.log(data)

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
