import { AxiosError } from 'axios'
import { notify } from '@/components/atoms/Toast'
import { SIGN_CONSTANT } from '@/constants/sign'
import { loginUser } from '@/services/auth'

export interface LoginReqBody {
  email: string
  password: string
}

export const useLogin = () => {
  const login = async ({ email, password }: LoginReqBody) => {
    try {
      const res = await loginUser({ email, password })
      if (res) {
        location.reload()
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError
      if ((response?.data as any).error === SIGN_CONSTANT.LOGINREJECT) {
        notify('error', '아이디와 비밀번호를 다시 확인해 주세요')
      }
    }
    return null
  }
  return { login }
}
