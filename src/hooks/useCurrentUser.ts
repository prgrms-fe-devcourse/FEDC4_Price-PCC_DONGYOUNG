import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import Cookies from 'js-cookie'
import { notify } from '@/components/atoms/Toast'
import { useRouter, usePathname } from 'next/navigation'
import { constants } from '@/config/constants'
import APP_PATH from '@/config/paths'
import { validateToken } from '@/services/auth'
import User from '@/types/user'

export const useCurrentUser = () => {
  const validateTokenMemo = useMemo(() => validateToken, [])

  let token = useRef<string | undefined>(Cookies.get(constants.AUTH_TOKEN))
  const [isLoggedIn, setIsLoggedIn] = useState(!!token.current)
  const [currentUser, setCurrentUser] = useState<User>()

  const router = useRouter()
  const pathname = usePathname()

  const validate = useCallback(async () => {
    const res = await validateTokenMemo()
    if (!res) {
      Cookies.remove(constants.AUTH_TOKEN)
      notify('error', '올바르지 않은 토큰입니다. 다시 로그인해주세요.')
      router.push(APP_PATH.login())
    }
    setIsLoggedIn(() => !!res)
    setCurrentUser(() => res)
  }, [validateTokenMemo, router])

  useEffect(() => {
    token.current = Cookies.get(constants.AUTH_TOKEN)

    if (token.current) {
      validate()
    } else {
      setIsLoggedIn(() => false)
      setCurrentUser(() => undefined)
    }
  }, [pathname, validate])

  return { currentUser, isLoggedIn }
}
