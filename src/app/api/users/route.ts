import { NextResponse } from 'next/server'
import { Environment } from '@/config/environments'

export async function GET(_request: Request) {
  try {
    const allUserRes = await fetch(`${Environment.baseUrl()}/users/get-users`, {
      next: {
        revalidate: 5,
      },
    })

    if (allUserRes.ok) {
      const allUser = await allUserRes.json()

      return new Response(JSON.stringify(allUser))
    }

    return new Response(JSON.stringify(allUserRes))
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response.data.message },
      { status: error.response.status },
    )
  }
}
