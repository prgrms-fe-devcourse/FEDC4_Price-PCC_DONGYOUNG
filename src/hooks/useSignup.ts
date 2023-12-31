import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { SIGN_CONSTANT } from '@/constants/sign'
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
        notify('success', '회원가입이 성공적으로 완료되었습니다.')
        router.push(APP_PATH.home())
        location.reload()
        return user
      }
    } catch (error) {
      const { response } = error as unknown as AxiosError
      if ((response?.data as any).error === SIGN_CONSTANT.SAMEIDSIGNUP) {
        notify('error', '중복된 아이디입니다.')
      } else {
        notify('error', '회원가입에 실패했습니다.')
      }
      return null
    }
  }

  return { signup }
}
