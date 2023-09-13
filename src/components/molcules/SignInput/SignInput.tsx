'use client'

import { ForwardedRef, forwardRef, FC } from 'react'
import './index.scss'

type SignInputProps = {
  text?: string
  placeholder?: string
  formType?: string
  type?: string
}

const SignInput: FC<SignInputProps> = forwardRef<
  HTMLInputElement,
  SignInputProps
>(
  (
    { text, placeholder, type, formType, ...rests }: SignInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={`sign-input-container ${formType}`}>
        <div className="sign-input-container__label">{text}</div>
        <input
          ref={ref}
          className="sign-input-container__input"
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
