'use client'

import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import User from '@/types/user'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<{
  currentUser: User | undefined
  isLoggedIn: boolean
}>({
  currentUser: undefined,
  isLoggedIn: false,
})

const authNeededPages = [APP_PATH.postNew()]
const authProhibitedPages = [APP_PATH.login(), APP_PATH.register()]

export function AuthProvider({ children }: AuthProviderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { currentUser, isLoggedIn } = useCurrentUser()

  const contextValue = useMemo(
    () => ({ currentUser, isLoggedIn }),
    [currentUser, isLoggedIn],
  )

  useEffect(() => {
    if (isLoggedIn && authProhibitedPages.includes(pathname)) {
      notify('warning', '이미 로그인 되어있습니다.')
      router.push(APP_PATH.home())
    }
    if (!isLoggedIn && authNeededPages.includes(pathname)) {
      notify('warning', '로그인이 필요합니다.')
      router.push(APP_PATH.login())
    }
  }, [isLoggedIn, pathname, router])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
