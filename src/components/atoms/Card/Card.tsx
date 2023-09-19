import React, { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import './index.scss'

export type CardProps = {
  children: ReactNode
  width?: number
  height?: number
  className?: string
  style?: CSSProperties
}

/**
 * 카드 컴포넌트
 * @param width 단위: rem
 * @param height 단위: rem
 * @returns children을 포함한 카드 컴포넌트
 */
export default function Card({
  children,
  width,
  height,
  style,
  ...props
}: CardProps) {
  return (
    <div
      className="card-container"
      {...props}
      style={{ width: `${width}rem`, height: `${height}rem`, ...style }}
    >
      {children}
    </div>
  )
}
