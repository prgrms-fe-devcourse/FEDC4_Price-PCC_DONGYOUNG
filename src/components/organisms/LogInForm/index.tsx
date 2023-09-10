'use client'

// 절대 경로 수정해야함
import { useForm } from 'react-hook-form'
import SignButton from '../../molcules/SignButton'
import SignInput from '../../molcules/SignInput'
import SignTitle from '../../molcules/SignTitle'
import './index.scss'

interface FormValues {
  id: string
  password: string
}

const LogInForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

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
        placeholder="아이디를 입력해 주세요"
      />
      <SignInput
        {...(register && register('password'))}
        type="password"
        text="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
      />
      <SignButton text="회원가입" />
      <SignButton text="로그인" />
    </form>
  )
}

export default LogInForm
