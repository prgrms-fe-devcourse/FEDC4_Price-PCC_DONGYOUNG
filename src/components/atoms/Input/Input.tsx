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
}>

export default function Input({
  placeholder,
  type = 'text',
  variant = 'default',
  outline = 'outline',
  borderRadius,
  onChangeFunction,
  style,
}: InputProps) {
  return (
    <input
      className={classNames('input', variant, outline, borderRadius)}
      placeholder={placeholder}
      type={type}
      style={style}
      readOnly={variant === 'disabled'}
      onChange={onChangeFunction}
    />
  )
}
