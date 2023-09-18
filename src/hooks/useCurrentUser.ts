import { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter, usePathname } from 'next/navigation'
import { constants } from '@/config/constants'
import APP_PATH from '@/config/paths'
import { validateToken } from '@/services/auth'
import User from '@/types/user'

export const useCurrentUser = () => {
  let token = useRef<string | undefined>(Cookies.get(constants.AUTH_TOKEN))
  const [isLoggedIn, setIsLoggedIn] = useState(!!token.current)
  const [currentUser, setCurrentUser] = useState<User>()

  const router = useRouter()
  const pathname = usePathname()
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
    } else {
      setIsLoggedIn(() => false)
      setCurrentUser(() => undefined)
    }
  }, [pathname, router])

  return { currentUser, isLoggedIn }
}
