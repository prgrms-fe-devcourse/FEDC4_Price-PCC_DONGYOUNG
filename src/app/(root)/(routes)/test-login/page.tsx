'use client'

import { Button } from '@/components/atoms/Button'
import { notify } from '@/components/atoms/Toast'
import { useLogin } from '@/hooks/useLogin'
import { useLogout } from '@/hooks/useLogout'
import { useSignup } from '@/hooks/useSignup'

export default function TestLogin() {
  const { login } = useLogin()
  const { logout } = useLogout()
  const { signup } = useSignup()

  const onClickLogin = async () => {
    await login({
      email: 'test@naver.com',
      password: '1234',
    })
  }

  const onClickLogout = async () => {
    await logout()
  }

  const onClickSignup = async () => {
    await signup({
      email: 'test@naver.com',
      password: '1234',
      fullName: 'Kim',
    })
  }

  return (
    <div>
      <button onClick={onClickLogin}>login</button>
      <button onClick={onClickLogout}>logout</button>
      <button onClick={onClickSignup}>signup</button>
      <Button
        onClick={() => notify('success', '성공했습니다!!')}
        text="클릭미"
        variant="default"
      />
    </div>
  )
}
