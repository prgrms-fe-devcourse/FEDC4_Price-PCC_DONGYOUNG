import React, { ReactNode } from 'react'
import './index.scss'

export type CardProps = {
  children: ReactNode
  width: number
  height: number
}

export default function Card({ children, width, height, ...props }: CardProps) {
  return (
    <div
      className="card-container"
      style={{ width: `${width}rem`, height: `${height}rem` }}
      {...props}
    >
      {children}
    </div>
  )
}
