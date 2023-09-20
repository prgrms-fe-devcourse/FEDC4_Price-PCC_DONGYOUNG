import { apiClient } from '@/lib/axios'

export const getSearchData = async (keyword: string) => {
  try {
    const { data } = await apiClient.get(`/api/search/all/${keyword}`)
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}
