import { apiClient } from '@/lib/axios'
import User from '@/types/user'

export const getUserDetail = async (id: string): Promise<User> => {
  const { data } = await apiClient.get(`/api/users/${id}`)
  return data
}

export const getAllUsers = async () => {
  const { data } = await apiClient.get('/api/users/')
  return data
}
