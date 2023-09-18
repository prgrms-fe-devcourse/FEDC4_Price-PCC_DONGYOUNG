import Cookies from 'js-cookie'
import { notify } from '@/components/atoms/Toast'
import { constants } from '@/config/constants'
import { useRouter } from 'next/navigation'
import APP_PATH from '@/config/paths'
import { loginUser } from '@/services/auth'

export interface LoginReqBody {
  email: string
  password: string
}

export const useLogin = () => {
  const router = useRouter()
  const login = async ({ email, password }: LoginReqBody) => {
    try {
      const res = await loginUser({ email, password })
      if (res) {
        const token = res.token
        Cookies.set(constants.AUTH_TOKEN, JSON.stringify(token))
        return token
      }
    } catch (error) {
      notify('error', '로그인에 실패했습니다.')
      return null
    }
  }
  return { login }
}
