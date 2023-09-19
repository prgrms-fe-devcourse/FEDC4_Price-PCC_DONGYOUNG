import { notify } from '@/components/atoms/Toast'
import { editUserProfile } from '@/services/user/edit/profile'

export interface EditUserProfileBody {
  fullName: string
  userName: string
}

export const useEditProfile = () => {
  const editProfile = async ({ fullName, userName }: EditUserProfileBody) => {
    try {
      await editUserProfile({ fullName, userName })
    } catch (error) {
      notify('error', '정보 수정에 실패했습니다.')
    }
  }

  return { editProfile }
}
