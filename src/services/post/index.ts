import { apiClient } from '@/lib/axios'

interface PostUserBody {
  title: {
    title: string
    description: string
  }
  image?: File
}

export const postUserPost = async (body: PostUserBody) => {
  const formData = new FormData()
  formData.append('title', JSON.stringify(body.title))
  formData.append('image', body.image!)
  const { data } = await apiClient.post('/api/posts/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data
}

export const getUserPosts = async ({
  authorId,
  offset,
  limit,
}: {
  authorId: string
  offset: number
  limit: number
}) => {
  const { data } = await apiClient.get(
    `/api/posts/author?authorId=${authorId}&offset=${offset}&limit=${limit}`,
  )
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
