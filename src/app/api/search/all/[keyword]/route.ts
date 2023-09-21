import { NextRequest } from 'next/server'
import { Environment } from '@/config/environments'

async function fetchSearchData(keyword: string) {
  const decodeKeyword = decodeURI(keyword)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/search/all/${decodeKeyword}`,
      {
        cache: 'no-cache',
      },
    )

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`Failed to fetch search data: ${error.message}`)
  }
}

export async function GET(req: NextRequest) {
  const keyword = req.nextUrl.pathname.replace('/api/search/all/', '')

  try {
    const data = await fetchSearchData(keyword)
    return new Response(
      JSON.stringify(
        data.filter(
          ({ channel }: { channel: string }) =>
            channel === Environment.channelId(),
        ),
      ),
      { status: 200 },
    )
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: Number(JSON.stringify({ error: error.status })),
    })
  }
}
