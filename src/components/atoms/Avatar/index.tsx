import React, { CSSProperties } from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

type AvatarProps = {
  color?: string
  shape?: 'rounded' | 'circle' | 'square'
  size: number
  src?: string
  text?: string
  textSize?: 'small' | 'medium' | 'large'
  textColor?: string
  textDirection?: 'top' | 'medium' | 'bottom'
  style?: CSSProperties
}

export default function Avatar({
  color,
  shape = 'circle',
  size = 100,
  src,
  text,
  textColor,
  textSize,
  textDirection,
  style,
}: AvatarProps) {
  const avatarClassName = `avatar bgColor-${color} shape-${shape} size-${size} `
  return (
    <div className="avatar__container">
      <div
        style={{ ...style, width: size, height: size }}
        className={avatarClassName}
      >
        <Image
          src={src || Assets.PCCImage}
          alt="아바타"
          fill
          className={`avatar__image shape-${shape}`}
          style={{
            backgroundColor: color,
          }}
        />
      </div>

      <span
        className={`color-${textColor} text-${textDirection} textSize-${textSize}`}
        style={{
          color: textColor,
        }}
      >
        {text}
      </span>
    </div>
  )
}
