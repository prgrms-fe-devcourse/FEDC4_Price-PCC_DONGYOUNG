import Cookies from 'js-cookie'
import { constants } from '@/config/constants'
import { logoutUser } from '@/services/auth'

export const useLogout = () => {
  const logout = async () => {
    const token = Cookies.get(constants.AUTH_TOKEN)!
    try {
      await logoutUser(token)
      location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return { logout }
}
