import { notify } from '@/components/atoms/Toast'
import { editUserProfileImage } from '@/services/user/edit/profile'

interface ImageFormData {
  isCover: false
  image: File
}

export const useEditProfileImage = () => {
  const editProfileImage = async ({ isCover, image }: ImageFormData) => {
    try {
      const res = await editUserProfileImage({
        isCover,
        image,
      })

      if (res) {
        notify('success', '프로필 이미지 변경에 성공했습니다.')
      }
    } catch (error) {
      notify('error', '프로필 이미지 변경에 실패했습니다.')
    }
  }

  return { editProfileImage }
}
