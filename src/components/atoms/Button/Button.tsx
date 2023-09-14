import classNames from 'classnames'
import './index.scss'

type ButtonProps = Partial<{
  text: string
  color: 'yellow' | 'red'
  width: number
  height: number
  variant: 'default' | 'warning' | 'disabled'
  rounded: 'rounded-md' | 'rounded-lg'
  isShadowed: boolean
  style: React.CSSProperties
}> & {
  onClick: (_e?: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  text,
  color,
  width,
  height,
  variant,
  isShadowed,
  rounded,
  style,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames('button-container', color, variant, rounded, {
        shadowed: isShadowed,
      })}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        ...style,
      }}
      disabled={variant === 'disabled'}
    >
      {text}
    </button>
  )
}
