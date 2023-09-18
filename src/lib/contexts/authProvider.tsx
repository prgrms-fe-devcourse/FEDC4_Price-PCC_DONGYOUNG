'use client'

import { PropsWithChildren, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'

interface AuthProviderProps {}

const authNeededPages = [APP_PATH.postNew()]
const authProhibitedPages = [APP_PATH.login(), APP_PATH.register()]

export default function AuthProvider({
  children,
}: PropsWithChildren<AuthProviderProps>) {
  const pathname = usePathname()
  const router = useRouter()
  const { isLoggedIn } = useCurrentUser()

  useEffect(() => {
    if (isLoggedIn && authProhibitedPages.includes(pathname)) {
      notify('warning', '이미 로그인 되어있습니다.')
      router.push(APP_PATH.home())
    }
    if (!isLoggedIn && authNeededPages.includes(pathname)) {
      notify('warning', '로그인이 필요합니다.')
      router.push(APP_PATH.login())
    }
  }, [pathname, isLoggedIn, router])

  return children
}
