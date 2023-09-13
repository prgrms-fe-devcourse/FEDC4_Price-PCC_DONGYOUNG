'use client'

import { Card } from '../Card'
import type { CardProps } from '../Card/Card'
import { Portal } from '../Portal'

type ModalProps = CardProps & {
  closeModal: () => void
  children: React.ReactNode
  isOpen: boolean
}

export default function Modal({
  children,
  isOpen,
  width,
  height,
  closeModal,
}: ModalProps) {
  return (
    <Portal>
      {isOpen ? (
        <div onClick={closeModal}>
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
