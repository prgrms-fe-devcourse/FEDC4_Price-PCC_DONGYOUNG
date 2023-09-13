import { Portal } from '../Portal'

type ModalProps = {
  onCloseModal: () => void
  children: React.ReactNode
  isOpen: boolean
}
;('use client')

export default function Modal({ children, isOpen, onCloseModal }: ModalProps) {
  return (
    <Portal>
      {isOpen && (
        <div
          style={{
            width: '700px',
            height: '700px',
          }}
          onClick={onCloseModal}
        >
          {children}
        </div>
      )}
    </Portal>
  )
}
