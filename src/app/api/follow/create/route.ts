import { NextResponse } from 'next/server'
import { useServerCookie } from '@/hooks/useServerCookie'
import { apiServer } from '@/lib/axiosSever'

export async function POST(request: Request) {
  const body = await request.json()
  const { token } = useServerCookie()
  try {
    const { data: followData } = await apiServer.post(`/follow/create`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const followId = followData._id
    const userId = followData.user

    const { data: notiData } = await apiServer.post(
      `/notifications/create`,
      {
        notificationType: 'FOLLOW',
        notificationTypeId: followId,
        userId: userId,
        postId: null,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    console.log(notiData)

    return NextResponse.json(followData)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
