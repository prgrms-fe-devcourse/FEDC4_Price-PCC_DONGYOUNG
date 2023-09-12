'use client'

import './index.scss'

interface ButtonProps {
  text?: string
  color?: string
  width?: number
  height?: number
  onClick(): void
}

export default function Button({
  text,
  color,
  width,
  height,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button-container ${color}`}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
      }}
    >
      {text}
    </button>
  )
}
