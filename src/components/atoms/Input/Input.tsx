import { ComponentProps, FC, ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'
import './index.scss'

type InputProps = Partial<{
  placeholder: string
  type: string
  variant: 'default' | 'error' | 'disabled' | 'clear'
  outline: 'outline' | 'underbar' | 'none'
  borderRadius: 'rounded-lg' | 'rounded-md'
  onChangeFunction: (_e: React.ChangeEvent<HTMLInputElement>) => void
  style: React.CSSProperties
}> &
  ComponentProps<'input'> & { ref?: ForwardedRef<HTMLInputElement> }

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type = 'text',
      variant = 'default',
      outline = 'outline',
      borderRadius,
      onChangeFunction,
      style,
      ...rests
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={classNames('input', variant, outline, borderRadius)}
        placeholder={placeholder}
        type={type}
        style={style}
        readOnly={variant === 'disabled'}
        onChange={onChangeFunction}
        {...rests}
      />
    )
  },
)

Input.displayName = 'Input'

export default Input
