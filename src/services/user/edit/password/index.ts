import { apiClient } from '@/lib/axios'

export const editUserPassword = async (password: string) => {
  await apiClient.put('/api/users/edit/password', { password })
}
