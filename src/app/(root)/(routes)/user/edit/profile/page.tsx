'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ModalProvider from '@/components/molcules/ModalLayout'
import PasswordInputModal from '@/components/organisms/PasswordInputModal'
import EditProfileTemplate from '@/components/templates/EditProfileTemplate'
import APP_PATH from '@/config/paths'
import { useCheckPassword } from '@/hooks/useCheckPassword'
import useModal from '@/hooks/useModal'

export default function EditProfile() {
  const router = useRouter()

  console.log(1)
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal()
  const { isAuthUser } = useCheckPassword()

  useEffect(() => {
    handleModalOpen()
  })

  useEffect(() => {
    if (isAuthUser) {
      handleModalClose()
    }
  }, [handleModalClose, isAuthUser])

  const handlePWModalClose = () => {
    handleModalClose()
    router.push(APP_PATH.home())
  }

  return isModalOpen ? (
    <ModalProvider
      modalWidth={41}
      modalHeight={44}
      isOpen={true}
      handleModalClose={() => {
        handlePWModalClose()
      }}
      clickOutsideToClose={false}
    >
      <PasswordInputModal handleModalClose={handlePWModalClose} />
    </ModalProvider>
  ) : isAuthUser ? (
    <EditProfileTemplate />
  ) : (
    <></>
  )
}
