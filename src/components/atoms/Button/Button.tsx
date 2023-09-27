import classNames from 'classnames'
import './index.scss'

type ButtonProps = Partial<{
  text: string
  width: number
  height: number
  variant: 'default' | 'warning' | 'disabled' | 'done'
  rounded?: 'rounded-md' | 'rounded-lg'
  isShadowed: boolean
  type: 'button' | 'reset' | 'submit' | undefined
  style: React.CSSProperties
  onClick: (_e?: React.MouseEvent<HTMLButtonElement>) => void
}>

export default function Button({
  text,
  width,
  height,
  variant,
  isShadowed,
  rounded = 'rounded-md',
  type = 'button',
  style,
  onClick,
  ...rests
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames('button-container', variant, rounded, {
        shadowed: isShadowed,
      })}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        ...style,
      }}
      disabled={variant === 'disabled'}
      type={type}
      {...rests}
    >
      {text}
    </button>
  )
}
