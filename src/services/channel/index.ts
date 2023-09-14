import { apiClient } from '@/lib/axios'

export const fetchAllPosts = async (channelId: string) => {
  try {
    const { data } = await apiClient.get(`api/channel/${channelId}`)
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}
