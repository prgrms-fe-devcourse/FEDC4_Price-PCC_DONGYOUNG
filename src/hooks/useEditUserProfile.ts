import { notify } from '@/components/atoms/Toast'
import { editUserProfile } from '@/services/user/edit/profile'

export interface EditUserProfileBody {
  fullName: string
  username: string
}

export const useEditProfile = () => {
  const editProfile = async ({ fullName, username }: EditUserProfileBody) => {
    try {
      await editUserProfile({ fullName, username })
    } catch (error) {
      notify('error', '정보 수정에 실패했습니다.')
    }
  }

  return { editProfile }
}
