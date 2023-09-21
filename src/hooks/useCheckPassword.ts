'use client'

import { useState } from 'react'

export const useCheckPassword = () => {
  const [isAuthUser, setIsAuthUser] = useState(false)

  const checkUser = () => {
    setIsAuthUser(true)
  }

  return { isAuthUser, checkUser }
}
