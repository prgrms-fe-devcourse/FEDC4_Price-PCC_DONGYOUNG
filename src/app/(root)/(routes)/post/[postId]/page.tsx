import { headers } from 'next/headers'
import { Environment } from '@/config/environments'

const getInitPost = async () => {
  const postHeaders = headers()
  const getPathName = postHeaders.get('x-invoke-path')?.replaceAll('/post/', '')

  const getInitPostRes = await fetch(
    `${Environment.baseUrl()}/posts/${getPathName}`,
    {
      cache: 'no-cache',
    },
  )

  const getPostDetail = await getInitPostRes.json()
  return await getPostDetail
}

export default async function Post() {
  const res = await getInitPost()
  console.log(res)
  return <div>글 상세 페이지</div>
}
