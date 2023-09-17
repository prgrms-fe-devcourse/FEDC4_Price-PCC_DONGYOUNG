import Cookies from 'js-cookie'
import { notify } from '@/components/atoms/Toast'
import { constants } from '@/config/constants'
import { logoutUser } from '@/services/auth'

export const useLogout = () => {
  const logout = async () => {
    const { token } = JSON.parse(Cookies.get(constants.AUTH_TOKEN) || '{}')
    try {
      await logoutUser(token)
      Cookies.remove(constants.AUTH_TOKEN)
      notify('success', '로그아웃 되었습니다.')
    } catch (error) {
      notify('error', '로그아웃에 실패했습니다.')
    }
  }

  return { logout }
}
