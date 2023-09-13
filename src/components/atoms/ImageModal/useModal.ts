'use client'

import { useState } from 'react'

export default function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return { isOpen, openModal, closeModal }
}
