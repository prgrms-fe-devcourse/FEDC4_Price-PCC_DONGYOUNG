import { apiClient } from '@/lib/axios'

export const getUser = async () => {
  const { data } = await apiClient.get('/user')
  return data
}
