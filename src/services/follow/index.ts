import { apiClient } from '@/lib/axios'

export const postFollow = async (userId: string) => {
  const { data } = await apiClient.post('/api/follow/create', {
    userId: userId,
  })
  return data
}

export const deleteFollow = async (userId: string) => {
  const { data } = await apiClient.post('/api/follow/delete', {
    id: userId,
  })
  return data
}
