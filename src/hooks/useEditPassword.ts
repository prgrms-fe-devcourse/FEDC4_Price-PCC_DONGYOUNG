import Cookies from 'js-cookie'
import { constants } from '@/config/constants'
import { editUserPassword } from '@/services/user'

export interface EditPasswordBody {
  password: string
}

export const useEditPassword = () => {
  const editPassword = async ({ password }: EditPasswordBody) => {
    const token = await Cookies.get(constants.AUTH_TOKEN)!

    try {
      await editUserPassword(password, token)
    } catch (error) {
      console.error(error)
    }
  }

  return { editPassword }
}
