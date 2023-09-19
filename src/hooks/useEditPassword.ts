import { notify } from '@/components/atoms/Toast'
import { editUserPassword } from '@/services/user'

export interface EditPasswordBody {
  password: string
}

export const useEditPassword = () => {
  const editPassword = async ({ password }: EditPasswordBody) => {
    try {
      await editUserPassword(password)
    } catch (error) {
      notify('error', '비밀번호 변경에 실패했습니다.')
    }
  }

  return { editPassword }
}
