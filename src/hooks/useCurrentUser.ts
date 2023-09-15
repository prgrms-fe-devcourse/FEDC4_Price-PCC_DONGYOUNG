import { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { constants } from '@/config/constants'
import APP_PATH from '@/config/paths'
import { validateToken } from '@/services/auth'
import User from '@/types/user'

export const useCurrentUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<User>()
  let token = useRef<string | undefined>(undefined)
  const router = useRouter()
  useEffect(() => {
    token.current = Cookies.get(constants.AUTH_TOKEN)
    async function validate() {
      const res = await validateToken()
      if (!res) {
        Cookies.remove(constants.AUTH_TOKEN)
        alert('올바르지 않은 토큰입니다.') // TODO: replace with toast
        router.push(APP_PATH.login())
      }
      setIsLoggedIn(() => !!res)
      setCurrentUser(() => res)
    }
    if (token.current) {
      validate()
    }
  }, [router])
  return { currentUser, isLoggedIn }
}
