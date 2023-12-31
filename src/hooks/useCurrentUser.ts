import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import { constants } from '@/config/constants'
import { validateToken } from '@/services/auth'
import User from '@/types/user'

export const useValidate = () => {
  const token = Cookies.get(constants.AUTH_TOKEN)
  return useQuery(
    ['validateToken', token],
    async () => {
      const res = await validateToken()
      if (!res) {
        Cookies.remove(constants.AUTH_TOKEN)
        notify('error', '올바르지 않은 토큰입니다. 다시 로그인해주세요.')
      }

      return res
    },
    {
      enabled: !!token,
    },
  )
}

export const useCurrentUser = () => {
  const pathname = usePathname()
  const validateQuery = useValidate()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => !!Cookies.get(constants.AUTH_TOKEN),
  )
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    if (validateQuery.isError) {
      setIsLoggedIn(false)
      setCurrentUser(undefined)
    } else if (validateQuery.data) {
      setIsLoggedIn(true)
      setCurrentUser(validateQuery.data)
    }
  }, [validateQuery, pathname])

  return { currentUser, isLoggedIn }
}
