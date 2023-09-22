import { apiClient } from '@/lib/axios'

export const getUserDetail = async (id: string) => {
  const { data } = await apiClient.get(`/api/users/${id}`)
  return data
}

export const getAllUsers = async () => {
  const { data } = await apiClient.get('/api/users/')
  return data
}
