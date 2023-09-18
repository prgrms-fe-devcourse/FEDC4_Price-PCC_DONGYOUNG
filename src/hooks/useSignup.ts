import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
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
    const user = await signupUser({ email, password, fullName })
    if (user) {
      Cookies.set(constants.AUTH_TOKEN, user)
      router.push(APP_PATH.home())
      return user
    }
    return null
  }

  return { signup }
}
