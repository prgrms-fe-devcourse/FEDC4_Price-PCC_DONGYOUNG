import { Card } from '../Card'
import type { CardProps } from '../Card/Card'
import { Portal } from '../Portal'

type ModalProps = CardProps & {
  onCloseModal: () => void
  children: React.ReactNode
  isOpen: boolean
  size: 'sm' | 'md' | 'lg' | number
}

export default function Modal({
  children,
  isOpen,
  onCloseModal,
  size,
}: ModalProps) {
  const SIZE = {
    sm: 1,
    md: 1.25,
    lg: 1.75,
  }
  const modalSize = typeof size === 'string' ? SIZE[size] : size

  return (
    <Portal>
      {isOpen && (
        <div onClick={onCloseModal}>
          <Card width={modalSize} height={modalSize}>
            {children}
          </Card>
        </div>
      )}
    </Portal>
  )
}
