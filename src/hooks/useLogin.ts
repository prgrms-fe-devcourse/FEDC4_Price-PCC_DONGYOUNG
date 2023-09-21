import { useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
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
        router.push(APP_PATH.home())
      }
    } catch (error) {
      notify('error', '로그인에 실패했습니다.')
      return null
    }
  }
  return { login }
}
