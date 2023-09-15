import { apiClient } from '@/lib/axios'
import Post from '@/types/post'

type GetAllPostsReq = {
  offset: number
  limit: number
}

export const getAllPosts = async ({
  offset,
  limit,
}: GetAllPostsReq): Promise<Post[]> => {
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
