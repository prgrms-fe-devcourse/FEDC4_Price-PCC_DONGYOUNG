import { apiClient } from '@/lib/axios'
import Post from '@/types/post'

type GetAllPosts = {
  offset: number
  limit: number
}

export const getAllPosts = async ({
  offset,
  limit,
}: GetAllPosts): Promise<Post[]> => {
  try {
    const { data } = await apiClient.get(
      `api/posts?offset=${offset}&limit=${limit}`,
    )
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
    return []
  }
}
