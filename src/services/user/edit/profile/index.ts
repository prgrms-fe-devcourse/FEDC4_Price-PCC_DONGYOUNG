import { apiClient } from '@/lib/axios'

interface PutUserBody {
  fullName: string
  username: string
}

export interface EditUserProfileImageBody {
  isCover: false
  image?: File
}

export const editUserProfile = async ({ fullName, username }: PutUserBody) => {
  const { data } = await apiClient.put(`api/users/edit/profile`, {
    fullName,
    username,
  })
  return data
}

export const editUserProfileImage = async (body: EditUserProfileImageBody) => {
  const formData = new FormData()
  formData.append('isCover', JSON.stringify(body.isCover))
  formData.append('image', body.image!)
  const { data } = await apiClient.post(`api/users/edit/profile`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data
}
