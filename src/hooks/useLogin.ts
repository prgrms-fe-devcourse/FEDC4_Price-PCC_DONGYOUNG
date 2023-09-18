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
    const res = await loginUser({ email, password })

    if (!!res) {
      router.push(APP_PATH.home())
    }

    return null
  }
  return { login }
}
