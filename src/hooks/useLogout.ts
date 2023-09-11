import Cookies from 'js-cookie'
import { constants } from '@/config/constants'
import { logoutUser } from '@/services/auth'

export const useLogout = () => {
  const logout = async () => {
    const { token } = JSON.parse(Cookies.get(constants.AUTH_TOKEN) || '{}')
    try {
      await logoutUser(token)
      Cookies.remove(constants.AUTH_TOKEN)
    } catch (error) {
      console.error(error)
    }
  }

  return { logout }
}
