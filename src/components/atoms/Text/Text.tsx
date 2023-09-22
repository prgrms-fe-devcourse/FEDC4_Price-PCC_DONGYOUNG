import { CSSProperties } from 'react'
import classNames from 'classnames'
import Color from '@/types/color'
import TextStyle from '@/types/textStyles'
import './index.scss'

type TextProps = {
  children: React.ReactNode
  textStyle: TextStyle
  color?: Color
  style?: CSSProperties
  className?: string
}

export default function Text({
  children,
  textStyle,
  color = 'gray-5',
  className,
  ...style
}: TextProps) {
  return (
    <div
      className={classNames(
        `${textStyle.replace('-', ' ')} color--${color}`,
        className,
      )}
      {...style}
    >
      {children}
    </div>
  )
}
