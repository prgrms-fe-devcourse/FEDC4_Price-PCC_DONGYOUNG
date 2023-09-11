import Cookies from 'js-cookie'
import { constants } from '@/config/constants'
import { loginUser } from '@/services/auth'

export interface LoginReqBody {
  email: string
  password: string
}

export const useLogin = () => {
  const login = async ({ email, password }: LoginReqBody) => {
    const res = await loginUser({ email, password })

    if (res) {
      const token = res.token
      Cookies.set(constants.AUTH_TOKEN, JSON.stringify(token))
      return token
    }

    return null
  }
  return { login }
}
