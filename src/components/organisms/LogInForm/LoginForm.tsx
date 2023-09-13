'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/atoms/Button'
import { SignInput } from '@/components/molcules/SignInput'
import { SignTitle } from '@/components/molcules/SignTitle'
import './index.scss'

type FormValues = {
  id: string
  password: string
}

const LogInForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const formType = 'login'

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <SignTitle text="로그인" />
      <SignInput
        {...(register && register('id'))}
        text="아이디"
        formType={formType}
        placeholder="아이디를 입력해 주세요"
      />
      <SignInput
        {...(register && register('password'))}
        type="password"
        text="비밀번호"
        formType={`last ${formType}`}
        placeholder="비밀번호를 입력해 주세요"
      />
      <Button
        onClick={() => {
          // go to sign up page
        }}
        text="회원가입"
        color="yellow"
        width={21.875}
        height={3.125}
      />
      <Button
        onClick={handleSubmit((data) => {
          console.log(data)
        })}
        text="로그인"
        color="yellow"
        width={21.875}
        height={3.125}
      />
    </form>
  )
}

export default LogInForm
