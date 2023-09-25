'use client'

import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import ModalProvider from '@/components/molcules/ModalLayout'
import PasswordInputModal from '@/components/organisms/PasswordInputModal'
import EditProfileTemplate from '@/components/templates/EditProfileTemplate'
import APP_PATH from '@/config/paths'
import { useCheckPassword } from '@/hooks/useCheckPassword'
import useModal from '@/hooks/useModal'

export default function EditProfile() {
  const router = useRouter()
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal()
  const { isAuthUser, setIsAuthUser } = useCheckPassword()
  const isVerified = Cookies.get('verified-user')

  useEffect(() => {
    handleModalOpen()
  })

  useEffect(() => {
    if (isVerified) {
      setIsAuthUser(true)
      handleModalClose()
    }
  }, [handleModalClose, setIsAuthUser, isVerified])

  const handlePWModalClose = () => {
    handleModalClose()
    router.push(APP_PATH.home())
  }

  return !isAuthUser ? (
    <ModalProvider
      modalWidth={41}
      modalHeight={44}
      isOpen={isModalOpen}
      handleModalClose={() => {
        handlePWModalClose()
      }}
      clickOutsideToClose={false}
    >
      <PasswordInputModal setIsAuthUser={setIsAuthUser} />
    </ModalProvider>
  ) : (
    <EditProfileTemplate />
  )
}
