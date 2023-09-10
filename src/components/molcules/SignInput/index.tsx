'use client'

import './index.scss'

interface SignInputProps {
  text?: string
  placeholder?: string
  type?: string
}

const SignInput = ({ text, placeholder, type }: SignInputProps) => {
  return (
    <div className="sign-input-container">
      <div className="input-title">{text}</div>
      <input className="sign-input" placeholder={placeholder} type={type} />
    </div>
  )
}

export default SignInput
