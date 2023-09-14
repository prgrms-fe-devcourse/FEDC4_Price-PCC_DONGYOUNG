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

export const getPostDetail = async (id: string) => {
  try {
    const { data } = await apiClient.get(`api/post/${id}`)
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}
