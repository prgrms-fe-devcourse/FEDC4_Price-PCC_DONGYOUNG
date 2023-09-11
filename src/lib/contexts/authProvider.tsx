'use client'

import { PropsWithChildren, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'

interface AuthProviderProps {}

export default function AuthProvider({
  children,
}: PropsWithChildren<AuthProviderProps>) {
  const pathname = usePathname()
  const router = useRouter()
  const { isLoggedIn } = useCurrentUser()

  useEffect(() => {
    if (isLoggedIn && pathname === APP_PATH.login()) {
      router.push(APP_PATH.home())
    }
  }, [pathname, isLoggedIn, router])

  return children
}
