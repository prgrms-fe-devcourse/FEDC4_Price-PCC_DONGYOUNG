'use client'

import { ForwardedRef, forwardRef, FC } from 'react'
import './index.scss'

interface SignInputProps {
  text?: string
  placeholder?: string
  type?: string
}

const SignInput: FC<SignInputProps> = forwardRef<
  HTMLInputElement,
  SignInputProps
>(
  (
    { text, placeholder, type, ...rests }: SignInputProps,
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
          {...rests}
        />
      </div>
    )
  },
)

SignInput.displayName = 'SignInput'

export default SignInput
