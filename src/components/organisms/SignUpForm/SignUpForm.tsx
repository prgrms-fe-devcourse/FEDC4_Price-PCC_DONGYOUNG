'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import { SignInput } from '@/components/molcules/SignInput'
import { SignTitle } from '@/components/molcules/SignTitle'
import APP_PATH from '@/config/paths'
import { useSignup } from '@/hooks/useSignup'
import './index.scss'

interface FormValues {
  id: string
  password: string
  passwordCheck: string
  fullName: string
}

const SignUpForm = () => {
  const { signup } = useSignup()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: '',
      password: '',
      passwordCheck: '',
      fullName: '',
    },
  })

  return (
    <form
      className="signup-form"
      onSubmit={handleSubmit(async (data) => {
        const user = await signup({
          email: data.id,
          password: data.password,
          fullName: data.fullName,
        })
        if (user) {
          router.push(APP_PATH.login())
        }
      })}
    >
      <SignTitle text="회원가입" />
      <SignInput
        {...(register &&
          register('id', {
            required: '아이디를 확인 해주세요',
            minLength: {
              value: 8,
              message: '아이디는 8글자 이상이어야 합니다',
            },
            maxLength: {
              value: 12,
              message: '아이디는 12글자 이하여야 합니다',
            },
          }))}
        text="아이디"
        placeholder="아이디를 입력해 주세요"
        validCheck={errors.id?.message}
        style={{ marginBottom: '2rem' }}
      />
      <SignInput
        {...(register &&
          register('password', {
            required: '비밀번호를 확인 해주세요',
            minLength: {
              value: 8,
              message: '비밀번호는 8글자 이상이어야 합니다',
            },
            maxLength: {
              value: 16,
              message: '비밀번호는 16글자 이하여야 합니다',
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
              message: '비밀번호는 숫자, 대문자, 소문자를 모두 포함해야 합니다',
            },
          }))}
        type="password"
        text="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        validCheck={errors.password?.message}
        style={{ marginBottom: '2rem' }}
      />
      <SignInput
        {...(register &&
          register('passwordCheck', {
            required: '비밀번호를 확인 해주세요',
            validate: {
              matchPassword: (value) => {
                const { password } = getValues()
                return password === value || '비밀번호가 일치하지 않습니다'
              },
            },
          }))}
        type="password"
        text="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해 주세요"
        validCheck={errors.passwordCheck?.message}
        style={{ marginBottom: '2rem' }}
      />
      <SignInput
        {...(register &&
          register('fullName', {
            required: '닉네임을 확인 해주세요',
          }))}
        text="닉네임"
        placeholder="닉네임을 입력해 주세요"
        validCheck={errors.fullName?.message}
        style={{ marginBottom: '4rem' }}
      />
      <Button
        onClick={handleSubmit(async (data) => {
          const user = await signup({
            email: data.id,
            password: data.password,
            fullName: data.fullName,
          })
          if (user) {
            router.push(APP_PATH.home())
          }
        })}
        text="회원가입"
        variant="default"
        rounded="rounded-lg"
        width={21.875}
        height={3.125}
        type="submit"
      />
    </form>
  )
}

export default SignUpForm
