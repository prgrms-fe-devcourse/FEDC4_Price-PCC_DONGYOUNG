'use client'

import { ForwardedRef, forwardRef, FC } from 'react'
import './index.scss'

interface SignInputProps {
  text?: string
  placeholder?: string
  type?: string
}

// eslint-disable-next-line react/display-name
const SignInput: FC<SignInputProps> = forwardRef<
  HTMLInputElement,
  SignInputProps
>(
  (
    { text, placeholder, type }: SignInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="sign-input-container">
        <div className="input-title">{text}</div>
        <input
          ref={ref}
          className="sign-input"
          placeholder={placeholder}
          type={type}
        />
      </div>
    )
  },
)

export default SignInput
