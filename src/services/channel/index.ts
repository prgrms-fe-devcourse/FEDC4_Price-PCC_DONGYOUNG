import { apiClient } from '@/lib/axios'
import Post from '@/types/post'

type GetAllPosts = {
  channelId: string
  offset: number
  limit: number
}

export const getAllPosts = async ({
  channelId,
  offset,
  limit,
}: GetAllPosts): Promise<Post[]> => {
  try {
    const { data } = await apiClient.get(
      `api/channel/${channelId}?offset=${offset}&limit=${limit}`,
    )
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
    return []
  }
}
