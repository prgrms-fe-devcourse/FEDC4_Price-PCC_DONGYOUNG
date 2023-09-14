import { apiClient } from '@/lib/axios'

interface PostUserBody {
  title: {
    title: string
    description: string
  }
  image?: BinaryData | null
}

export const postUserPost = async (body: PostUserBody) => {
  const { data } = await apiClient.post('/api/posts/create', body)
  return data
}
