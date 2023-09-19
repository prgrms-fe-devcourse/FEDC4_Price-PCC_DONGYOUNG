'use client'

import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { Card } from '@/components/atoms/Card'
import './index.scss'

type ModalProviderProps = {
  modalWidth: number
  modalHeight: number
  isOpen: boolean
  handleModalClose: () => void
  clickOutsideToClose?: boolean
}

export default function ModalProvider({
  children,
  modalWidth,
  modalHeight,
  isOpen,
  handleModalClose,
  clickOutsideToClose = true,
}: PropsWithChildren<ModalProviderProps>) {
  const handleOutsideClick = () => {
    if (!clickOutsideToClose) return
    handleModalClose()
  }
  return (
    <div
      className={classNames('modal-background', {
        isOpen: isOpen,
      })}
      onClick={handleOutsideClick}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Card width={modalWidth} height={modalHeight}>
          {children}
        </Card>
      </div>
    </div>
  )
}
