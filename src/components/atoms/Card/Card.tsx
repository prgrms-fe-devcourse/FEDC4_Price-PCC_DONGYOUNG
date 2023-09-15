import React, { CSSProperties, ReactNode } from 'react'
import './index.scss'

export type CardProps = {
  children: ReactNode
  style?: CSSProperties
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <div className="card-container" {...props}>
      {children}
    </div>
  )
}
x
