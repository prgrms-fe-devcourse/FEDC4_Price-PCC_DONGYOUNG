import { apiClient } from '@/lib/axios'

export const getUser = async () => {
  const { data } = await apiClient.get('/user')
  return data
}

export const getAllUsers = async () => {
  const { data } = await apiClient.get('/api/users/')
  return data
}
