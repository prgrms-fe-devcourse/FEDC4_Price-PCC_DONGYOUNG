'use client'

import { useState } from 'react'
import { notify } from '@/components/atoms/Toast'
import { loginUser } from '@/services/auth'
import { LoginReqBody } from './useLogin'

export const useCheckPassword = () => {
  const [isAuthUser, setIsAuthUser] = useState(false)

  const checkUser = async ({ email, password }: LoginReqBody) => {
    try {
      const res = await loginUser({ email, password })
      return !!res
    } catch (error) {
      notify('error', '비밀번호 인증에 실패했습니다.')
    }
  }

  return { isAuthUser, checkUser, setIsAuthUser }
}
