import { CSSProperties } from 'react'
import Color from '@/types/color'
import './index.scss'

type TextProps = {
  children: string
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
}

export default function Text({
  children,
  textStyle,
  color = 'gray-5',
  ...style
}: TextProps) {
  return (
    <div
      className={`${textStyle.replace('-', ' ')} color--${color}`}
      {...style}
    >
      {children}
    </div>
  )
}
