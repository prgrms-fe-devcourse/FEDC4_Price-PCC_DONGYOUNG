'use client'

import './index.scss'

type ButtonProps = {
  text?: string
  color?: 'yellow' | 'red'
  width?: number
  height?: number
  onClick?(): void
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
