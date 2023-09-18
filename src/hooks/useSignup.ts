import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import { constants } from '@/config/constants'
import APP_PATH from '@/config/paths'
import { signupUser } from '@/services/auth'

export interface SignupReqBody {
  email: string
  password: string
  fullName: string
}

export const useSignup = () => {
  const router = useRouter()
  const signup = async ({ email, password, fullName }: SignupReqBody) => {
    try {
      const user = await signupUser({ email, password, fullName })
      if (user) {
        Cookies.set(constants.AUTH_TOKEN, JSON.stringify(user))
        notify('success', '회원가입이 성공적으로 완료되었습니다.')
        router.push(APP_PATH.home())
        return user
      }
    } catch (error) {
      notify('error', '회원가입에 실패했습니다.')
      return null
    }
  }

  return { signup }
}
