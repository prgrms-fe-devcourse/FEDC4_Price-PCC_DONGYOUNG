import { ForwardedRef, forwardRef } from 'react'
import Input from '@/components/atoms/Input'
import { InputProps } from '@/components/atoms/Input/Input'
import './index.scss'

type ValidInputProps = InputProps & {
  errorMessage?: string
}

const ValidInput = forwardRef<HTMLInputElement, ValidInputProps>(
  (
    {
      errorMessage,
      placeholder,
      type,
      variant,
      outline,
      borderRadius,
      onChangeFunction,
      style,
      ...rests
    }: ValidInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="valid-input-container" style={style}>
        <Input
          ref={ref}
          placeholder={placeholder}
          type={type}
          variant={variant}
          outline={outline}
          borderRadius={borderRadius}
          onChangeFunction={onChangeFunction}
          style={{ boxSizing: 'border-box', marginBottom: '0.3rem' }}
          {...rests}
        />
        <span className="valid-input-container__error-message">
          {errorMessage}
        </span>
      </div>
    )
  },
)

ValidInput.displayName = 'ValidInput'

export default ValidInput
