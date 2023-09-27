'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import ModalProvider from '@/components/molcules/ModalLayout'
import PasswordInputModal from '@/components/organisms/PasswordInputModal'
import EditProfileTemplate from '@/components/templates/EditProfileTemplate'
import { useCheckPassword } from '@/hooks/useCheckPassword'
import useModal from '@/hooks/useModal'

export default function EditProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { handleModalClose } = useModal()
  const { isAuthUser, setIsAuthUser } = useCheckPassword()
  const isVerified = Cookies.get('verified-user')

  useEffect(() => {
    if (!isVerified) {
      setIsModalOpen(true)
    } else {
      setIsAuthUser(true)
    }
  }, [setIsAuthUser, isVerified])

  return !isAuthUser ? (
    <ModalProvider
      modalWidth={41}
      modalHeight={44}
      isOpen={isModalOpen}
      handleModalClose={handleModalClose}
      clickOutsideToClose={false}
    >
      <PasswordInputModal setIsAuthUser={setIsAuthUser} />
    </ModalProvider>
  ) : (
    <EditProfileTemplate />
  )
}
