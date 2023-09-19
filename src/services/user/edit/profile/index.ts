import { apiClient } from '@/lib/axios'

interface PutUserBody {
  fullName: string
  userName: string
}

export const editUserProfile = async ({ fullName, userName }: PutUserBody) => {
  const { data } = await apiClient.put(`api/users/edit/profile`, {
    fullName,
    userName,
  })
  return data
}
