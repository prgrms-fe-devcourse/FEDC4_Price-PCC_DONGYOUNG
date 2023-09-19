import Cookies from 'js-cookie'
import { notify } from '@/components/atoms/Toast'
import { constants } from '@/config/constants'
import { logoutUser } from '@/services/auth'

export const useLogout = () => {
  const logout = async () => {
    const token = Cookies.get(constants.AUTH_TOKEN)!
    try {
      await logoutUser(token)
      location.reload()
    } catch (error) {
      notify('error', '로그아웃에 실패했습니다.')
    }
  }

  return { logout }
}
