import React, { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import './index.scss'

export type CardProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={classNames('card-container', className)} {...props}>
      {children}
    </div>
  )
}
