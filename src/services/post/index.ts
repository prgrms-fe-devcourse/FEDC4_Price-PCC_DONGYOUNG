import { Environment } from '@/config/environments'

export async function getPostDetail(id: string) {
  const response = await fetch(`${Environment.baseUrl()}/posts/${id}`, {
    cache: 'no-cache',
  })

  const postDetail = await response.json()
  return postDetail
}
