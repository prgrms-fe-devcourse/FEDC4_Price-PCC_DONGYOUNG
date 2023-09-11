import Cookies from 'js-cookie'
import { constants } from '@/config/constants'
import { signupUser } from '@/services/auth'

export interface SignupReqBody {
  email: string
  password: string
  fullName: string
}

export const useSignup = () => {
  const signup = async ({ email, password, fullName }: SignupReqBody) => {
    const user = await signupUser({ email, password, fullName })
    if (user) {
      Cookies.set(constants.AUTH_TOKEN, JSON.stringify(user))
      return user
    }
    return null
  }

  return { signup }
}
