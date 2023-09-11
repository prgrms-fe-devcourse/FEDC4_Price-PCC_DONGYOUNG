'use client'

import { useForm } from 'react-hook-form'
import SignButton from '@/components/molcules/SignButton'
import SignInput from '@/components/molcules/SignInput'
import SignTitle from '@/components/molcules/SignTitle'
import './index.scss'

interface FormValues {
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
        formType={formType}
        text="아이디"
        placeholder="아이디를 입력해 주세요"
      />
      <SignInput
        {...(register && register('password'))}
        formType={`last ${formType}`}
        type="password"
        text="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
      />
      <SignButton
        onClick={() => {
          // go to sign up page
        }}
        text="회원가입"
      />
      <SignButton
        onClick={handleSubmit((data) => {
          console.log(data)
        })}
        text="로그인"
      />
    </form>
  )
}

export default LogInForm
