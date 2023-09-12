import { apiClient } from '@/lib/axios'

export const fetchPostDetail = async (id: string) => {
  try {
    const { data } = await apiClient.get(`api/post/${id}`)
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}
