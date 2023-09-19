import { CSSProperties } from 'react'
import classNames from 'classnames'
import Color from '@/types/color'
import './index.scss'

type TextProps = {
  children: React.ReactNode
  textStyle:
    | 'heading0-bold'
    | 'heading1-bold'
    | 'heading2'
    | 'heading2-bold'
    | 'subtitle1'
    | 'subtitle1-bold'
    | 'subtitle2'
    | 'body1'
    | 'body1-bold'
    | 'body2'
    | 'body2-bold'
    | 'caption1'
    | 'caption1-bold'
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
