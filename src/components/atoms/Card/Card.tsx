import React, { ReactNode } from 'react'
import './index.scss'

type CardProps = {
  children: ReactNode
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <div className="card-container" {...props}>
      {children}
    </div>
  )
}
