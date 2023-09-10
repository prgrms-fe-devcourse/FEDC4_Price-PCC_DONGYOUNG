'use client'

import './index.scss'

interface SignButtonProps {
  text?: string
}

export default function SignButton({ text }: SignButtonProps) {
  return <button className="sign-button-container">{text}</button>
}
