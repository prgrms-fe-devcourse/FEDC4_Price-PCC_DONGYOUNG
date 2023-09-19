import { apiClient } from '@/lib/axios'

interface PutUserBody {
  fullName: string
  username: string
}

export const editUserProfile = async ({ fullName, username }: PutUserBody) => {
  const { data } = await apiClient.put(`api/users/edit/profile`, {
    fullName,
    username,
  })
  return data
}
