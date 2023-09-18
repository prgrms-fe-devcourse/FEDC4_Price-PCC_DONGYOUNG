import { PropsWithChildren } from 'react'
import { Card } from '@/components/atoms/Card'
import './index.scss'

type ModalLayoutProps = {
  onCloseModal: () => void
  modalWidth: number
  modalHeight: number
}

export default function ModalLayout({
  children,
  modalWidth,
  modalHeight,
  onCloseModal,
}: PropsWithChildren<ModalLayoutProps>) {
  return (
    <div className="modal-background" onClick={onCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <Card width={modalWidth} height={modalHeight}>
          {children}
        </Card>
      </div>
    </div>
  )
}
