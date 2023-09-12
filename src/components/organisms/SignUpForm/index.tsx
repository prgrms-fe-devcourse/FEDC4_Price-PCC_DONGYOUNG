'use client'

import { useForm } from 'react-hook-form'
import Button from '@/components/atoms/Button'
import SignInput from '@/components/molcules/SignInput'
import SignTitle from '@/components/molcules/SignTitle'
import './index.scss'

interface FormValues {
  id: string
  password: string
  passwordCheck: string
  name: string
  nickName: string
}

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const formType = 'signup'

  return (
    <form
      className="signup-form"
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <SignTitle text="회원가입" />
      <SignInput
        {...(register && register('id'))}
        formType={formType}
        text="아이디"
        placeholder="아이디를 입력해 주세요"
      />
      <SignInput
        {...(register && register('password'))}
        formType={formType}
        type="password"
        text="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
      />
      <SignInput
        {...(register && register('passwordCheck'))}
        formType={formType}
        type="password"
        text="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해 주세요"
      />
      <SignInput
        {...(register && register('name'))}
        formType={formType}
        text="이름"
        placeholder="이름을 입력해 주세요"
      />
      <SignInput
        {...(register && register('nickName'))}
        formType={`last ${formType}`}
        text="닉네임"
        placeholder="닉네임을 입력해 주세요"
      />
      <Button
        onClick={handleSubmit((data) => {
          console.log(data)
        })}
        text="회원가입"
        color="yellow"
        width={21.875}
        height={3.125}
      />
    </form>
  )
}

export default SignUpForm
