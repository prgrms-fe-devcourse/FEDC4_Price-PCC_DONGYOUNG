import { apiClient } from '@/lib/axios'

export const getUserDetail = async (id: string) => {
  const { data } = await apiClient.get(`/api/users/${id}`)
  return data
}

export const getAllUsers = async () => {
  const { data } = await apiClient.get('/api/users/')
  return data
}

export const editUserPassword = async (password: string, token: string) => {
  await apiClient.put(
    '/api/users/edit/password',
    { password },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )
}
