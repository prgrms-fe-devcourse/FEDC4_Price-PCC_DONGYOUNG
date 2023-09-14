'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/atoms/Button'
import { SignInput } from '@/components/molcules/SignInput'
import { SignTitle } from '@/components/molcules/SignTitle'
import './index.scss'

interface FormValues {
  id: string
  password: string
  passwordCheck: string
  name: string
  nickName: string
}

const SignUpForm = () => {
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
      name: '',
      nickName: '',
    },
  })
  const formType = 'signup'

  return (
    <form
      className="signup-form"
      // 로직 연결에서 아이디 중복 처리
      onSubmit={handleSubmit((data) => {
        console.log(data)
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
        formType={formType}
        text="아이디"
        placeholder="아이디를 입력해 주세요"
        validCheck={errors.id?.message}
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
        formType={formType}
        type="password"
        text="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        validCheck={errors.password?.message}
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
        formType={formType}
        type="password"
        text="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해 주세요"
        validCheck={errors.passwordCheck?.message}
      />
      <SignInput
        {...(register &&
          register('name', {
            required: '이름을 확인 해주세요',
          }))}
        formType={formType}
        text="이름"
        placeholder="이름을 입력해 주세요"
        validCheck={errors.name?.message}
      />
      <SignInput
        {...(register &&
          register('nickName', {
            required: '닉네임을 확인 해주세요',
          }))}
        formType={`last ${formType}`}
        text="닉네임"
        placeholder="닉네임을 입력해 주세요"
        validCheck={errors.nickName?.message}
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
