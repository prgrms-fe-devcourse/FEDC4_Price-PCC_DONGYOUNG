'use client'

import { PropsWithChildren, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'

interface AuthProviderProps {}

const authNeededPages = [APP_PATH.postNew()]
const authProhibitedPages = [APP_PATH.login()]

export default function AuthProvider({
  children,
}: PropsWithChildren<AuthProviderProps>) {
  const pathname = usePathname()
  const router = useRouter()
  const { isLoggedIn } = useCurrentUser()

  // TODO: 토스트 적용 또는 다른 방법으로 변경
  useEffect(() => {
    if (isLoggedIn && authProhibitedPages.includes(pathname)) {
      alert('이미 로그인 되어있습니다.')
      router.push(APP_PATH.home())
    }
    if (!isLoggedIn && authNeededPages.includes(pathname)) {
      alert('로그인이 필요합니다.')
      router.push(APP_PATH.login())
    }
  }, [pathname, isLoggedIn, router])

  return children
}
