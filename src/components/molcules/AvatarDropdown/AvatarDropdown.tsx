'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Avatar from '@/components/atoms/Avatar'
import Assets from '@/config/assets'
import User from '@/types/user'
import ModalDropdownList from '../ModalDropdownList'
import './index.scss'

export default function AvatarDropdown({
  darkmode,
  currentUser,
}: {
  darkmode: boolean
  currentUser: User
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const handleDropdown = useCallback(() => {
    setIsOpen((prevClick) => !prevClick)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div className="header-user-container" onClick={handleDropdown}>
      <Avatar
        src={currentUser ? currentUser.image : Assets.PCCImage}
        size={3}
        text={currentUser ? currentUser.fullName : ''}
        textStyle={{
          fontWeight: 'bold',
          padding: '0 0.5rem 0 0.5rem',
          wordBreak: 'keep-all',
        }}
      />
      <Image
        src={darkmode ? Assets.ArrowLightIcon : Assets.ArrowDarkIcon}
        alt="dropdown-arrow"
      />
      <ModalDropdownList
        userId={currentUser ? currentUser._id : ''}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}
