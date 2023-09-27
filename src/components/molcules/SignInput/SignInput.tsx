'use client'

import { ForwardedRef, forwardRef, FC } from 'react'
import Input from '@/components/atoms/Input'
import { InputProps } from '@/components/atoms/Input/Input'
import { Text } from '@/components/atoms/Text'
import './index.scss'

type SignInputProps = InputProps & {
  text: string
  validCheck?: string
}

const SignInput: FC<SignInputProps> = forwardRef<
  HTMLInputElement,
  SignInputProps
>(
  (
    { text, placeholder, validCheck, style, ...rests }: SignInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={`sign-input-container`} style={style}>
        <Text
          textStyle="heading1-bold"
          color="gray-5"
          style={{ marginBottom: '0.7rem' }}
        >
          {text}
        </Text>
        <Input
          ref={ref}
          placeholder={placeholder}
          outline="none"
          style={{
            boxSizing: 'border-box',
            borderRadius: '20px',
            height: '3.125rem',
          }}
          {...rests}
        />
        {validCheck && (
          <p className="sign-input-container__valid">{validCheck}</p>
        )}
      </div>
    )
  },
)

SignInput.displayName = 'SignInput'

export default SignInput
