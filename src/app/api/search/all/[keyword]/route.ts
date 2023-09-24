import { NextRequest } from 'next/server'
import { Environment } from '@/config/environments'
import Post from '@/types/post'
import { UserSummary } from '@/types/user'

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
    const filteredData = data.filter(
      ({ channel }: { channel: string }) =>
        !channel || channel === Environment.channelId(),
    )
    const parsedData = filteredData.map((data: UserSummary | Post) => {
      if (!isUser(data)) {
        const parsedArticle = JSON.parse(data.title)
        if (parsedArticle) {
          return {
            ...data,
            title: parsedArticle.title,
            description: parsedArticle.description,
            mapping_ID: parsedArticle.mapping_ID,
          }
        } else {
          return {
            ...data,
            description: '',
          }
        }
      }
      return data
    })
    return new Response(JSON.stringify(parsedData), { status: 200 })
  } catch (error: any) {
    console.error(error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: Number(JSON.stringify({ error: error.status })),
    })
  }
}

const isUser = (target: UserSummary | Post): target is UserSummary => {
  return (target as UserSummary).fullName !== undefined
}
