'use client'

import './index.scss'

interface SignButtonProps {
  text?: string
  onClick(): void
}

export default function SignButton({ text, onClick }: SignButtonProps) {
  return (
    <button onClick={onClick} className="sign-button-container">
      {text}
    </button>
  )
}
