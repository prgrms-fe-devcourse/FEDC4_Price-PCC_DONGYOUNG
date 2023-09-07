import React, { ComponentProps, CSSProperties } from 'react'
import Image from 'next/image'
import './index.scss'
import BaseAvatarImage from '/public/images/baseAvatar.png'

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
  shape?: 'rounded' | 'circle' | 'square'
  size: number
  src?: string
  text?: string
  textColor?:
    | 'yellow_primary'
    | 'yellow_dark'
    | 'yellow_secondary'
    | 'gray_primary'
    | 'gray_dark'
    | 'gray-light'
    | 'gray_secondary'
    | 'danger'
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
  textDirection,
  style,
}: AvatarProps) {
  const avatarClassName = `avatar bgColor-${color} shape-${shape} size-${size} text-${textDirection}`
  return (
    <>
      <div
        style={{ ...style, width: size, height: size }}
        className={avatarClassName}
      >
        <Image
          src={src || BaseAvatarImage}
          alt="아바타"
          width={size}
          height={size}
          className={`avatar__image shape-${shape}`}
        />
      </div>

      <span className={`color--${textColor}`}>{text}</span>
    </>
  )
}
