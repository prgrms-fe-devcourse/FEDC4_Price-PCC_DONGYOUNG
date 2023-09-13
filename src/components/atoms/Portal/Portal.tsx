'use client'

import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
}

export default function Portal({ children }: PortalProps) {
  const node = document.getElementById('modal') as HTMLElement
  return createPortal(children, node)
}
