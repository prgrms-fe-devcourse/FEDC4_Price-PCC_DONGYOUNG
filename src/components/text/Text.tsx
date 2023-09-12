import Color from '@/types/color'
import './index.scss'

type TextProps = {
  text: string
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
}

export default function Text({ text, textStyle, color }: TextProps) {
  return (
    <div className={`${textStyle.replace('-', ' ')} color--${color}`}>
      {text}
    </div>
  )
}
