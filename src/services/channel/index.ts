import { apiClient } from '@/lib/axios'

type GetAllPosts = {
  channelId: string
  offset: number
  limit: number
}
export const getAllPosts = async ({
  channelId,
  offset,
  limit,
}: GetAllPosts) => {
  try {
    const { data } = await apiClient.get(
      `api/channel/${channelId}?offset=${offset}&limit=${limit}`,
    )
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}
