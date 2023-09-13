'use client'

import { Card } from '../Card'
import type { CardProps } from '../Card/Card'
import { Portal } from '../Portal'
import './index.scss'

type ModalProps = CardProps & {
  closeModal: () => void
  children: React.ReactNode
  isOpen: boolean
}

export default function Modal({ children, isOpen, width, height }: ModalProps) {
  return (
    <Portal>
      {isOpen ? (
        <div className="modal--container">
          <Card width={width} height={height}>
            {children}
          </Card>
        </div>
      ) : (
        <></>
      )}
    </Portal>
  )
}
