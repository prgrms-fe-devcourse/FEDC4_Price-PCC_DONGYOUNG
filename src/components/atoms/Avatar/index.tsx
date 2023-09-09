import React, { CSSProperties } from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

type AvatarProps = {
  color?: string
  shape?: 'rounded' | 'circle' | 'square'
  size: number
  src?: string
  alt?: string
  text?: string
  subText?: string
  textSize?: 'small' | 'medium' | 'large'
  textColor?: string
  textDirection?: 'top' | 'medium' | 'bottom'
  textStyle?: CSSProperties
  style?: CSSProperties
  children?: React.ReactNode
}

type AvatarTextProps = Pick<
  AvatarProps,
  'text' | 'textStyle' | 'textDirection' | 'textColor' | 'textSize' | 'subText'
>

export default function Avatar({
  color,
  shape = 'circle',
  size = 100,
  subText,
  src,
  alt,
  text,
  textColor,
  textStyle,
  textSize,
  textDirection,
  style,
  children,
}: AvatarProps) {
  return (
    <div className="avatar__container">
      <Profile
        size={size}
        alt={alt}
        src={src}
        color={color}
        shape={shape}
        style={style}
      />

      {children}
      <Description
        text={text}
        subText={subText}
        textSize={textSize}
        textColor={textColor}
        textStyle={textStyle}
        textDirection={textDirection}
      />
    </div>
  )
}

const Profile = ({ size, style, color, shape, src, alt }: AvatarProps) => {
  return (
    <div
      style={{ ...style, width: size, height: size }}
      className={`avatar bgColor-${color} shape-${shape} size-${size}`}
    >
      <Image
        src={src || Assets.PCCImage}
        alt={alt || 'avatar'}
        fill
        className={`avatar__image shape-${shape}`}
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  )
}

const Description = ({
  text,
  subText,
  textSize,
  textStyle,
  textDirection,
  textColor,
}: AvatarTextProps) => {
  return (
    <span
      className={`color-${textColor} text-${textDirection} textSize-${textSize}`}
      style={{
        color: textColor,
        ...textStyle,
      }}
    >
      <div style={textStyle}>{text}</div>
      <div style={textStyle}>{subText}</div>
    </span>
  )
}
