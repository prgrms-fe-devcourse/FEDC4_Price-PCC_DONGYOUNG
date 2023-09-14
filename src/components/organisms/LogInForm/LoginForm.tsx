'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import { SignInput } from '@/components/molcules/SignInput'
import { SignTitle } from '@/components/molcules/SignTitle'
import APP_PATH from '@/config/paths'
import './index.scss'

type FormValues = {
  id: string
  password: string
}

const LogInForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
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
        {...(register &&
          register('id', {
            required: '아이디를 입력해 주세요',
          }))}
        text="아이디"
        formType={formType}
        placeholder="아이디를 입력해 주세요"
        validCheck={errors.id?.message}
      />
      <SignInput
        {...(register &&
          register('password', {
            required: '비밀번호를 입력해 주세요',
          }))}
        type="password"
        text="비밀번호"
        formType={`last ${formType}`}
        placeholder="비밀번호를 입력해 주세요"
        validCheck={errors.password?.message}
      />
      <Button
        onClick={(e) => {
          e?.preventDefault()
          router.push(APP_PATH.register())
        }}
        text="회원가입"
        variant="default"
        rounded="rounded-lg"
        width={21.875}
        height={3.125}
        style={{ marginBottom: '1.56rem' }}
      />
      <Button
        onClick={handleSubmit((data) => {
          console.log(data)
        })}
        text="로그인"
        variant="default"
        rounded="rounded-lg"
        width={21.875}
        height={3.125}
      />
    </form>
  )
}

export default LogInForm
