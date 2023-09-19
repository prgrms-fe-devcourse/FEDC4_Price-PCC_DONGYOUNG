import { NextRequest } from 'next/server'
import Post from '@/types/post'

async function fetchSearchData(keyword: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/search/all/${keyword}`,
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
  const keyword = req.nextUrl.pathname.replace('api/search/all', '')
  console.log(`keyword = ${keyword}`)

  try {
    const datas = await fetchSearchData(keyword)

    const parsedDatas = datas.map((data: Post) => {
      const parsedArticle = JSON.parse(data.title)
      if (parsedArticle) {
        return {
          ...data,
          title: parsedArticle.title,
          description: parsedArticle.description,
        }
      } else {
        return {
          ...data,
          description: '',
        }
      }
    })
    console.log('parsedDatas = ', parsedDatas)
    return new Response(JSON.stringify(parsedDatas), { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
  }
}
