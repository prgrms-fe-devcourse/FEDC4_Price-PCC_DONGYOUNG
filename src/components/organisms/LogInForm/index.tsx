'use client'

// 절대 경로 수정해야함
import SignButton from '../../molcules/SignButton'
import SignInput from '../../molcules/SignInput'
import SignTitle from '../../molcules/SignTitle'
import './index.scss'

const LogInForm = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('로그인 시도')
  }

  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <SignTitle text="로그인" />
      <SignInput text="아이디" placeholder="아이디를 입력해 주세요" />
      <SignInput
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
