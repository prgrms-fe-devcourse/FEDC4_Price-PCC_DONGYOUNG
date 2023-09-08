import React, { ComponentProps, CSSProperties } from 'react'
import Image from 'next/image'
import './index.scss'
import pccImage from '/public/images/pccIImage.svg'

type AvatarProps = ComponentProps<'div'> & {
  color?:
    | 'yellow_primary'
    | 'yellow_dark'
    | 'yellow_secondary'
    | 'gray_primary'
    | 'gray_dark'
    | 'gray-light'
    | 'gray_secondary'
    | 'danger'
    | string
  shape?: 'rounded' | 'circle' | 'square'
  size: number
  src?: string
  text?: string
  textSize?: 'small' | 'medium' | 'large'
  textColor?:
    | 'yellow_primary'
    | 'yellow_dark'
    | 'yellow_secondary'
    | 'gray_primary'
    | 'gray_dark'
    | 'gray-light'
    | 'gray_secondary'
    | 'danger'
    | string
  textDirection?: 'top' | 'medium' | 'bottom'
  style?: CSSProperties
}

export default function Avatar({
  color,
  shape,
  size,
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
          src={src || pccImage}
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
