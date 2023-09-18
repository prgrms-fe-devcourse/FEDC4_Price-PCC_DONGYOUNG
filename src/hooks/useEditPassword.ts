import Cookies from 'js-cookie'
import { constants } from '@/config/constants'
import { editUserPassword } from '@/services/auth'

export interface EditPasswordBody {
  password: string
}

export const useEditPassword = () => {
  const editPassword = async ({ password }: EditPasswordBody) => {
    const token = await JSON.parse(Cookies.get(constants.AUTH_TOKEN) || '{}')
    console.log(token)
    try {
      await editUserPassword(password, token)
    } catch (error) {
      console.error(error)
    }
  }

  return { editPassword }
}
