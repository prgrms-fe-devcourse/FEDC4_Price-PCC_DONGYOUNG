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
  darkMode,
  currentUser,
}: {
  darkMode: boolean
  currentUser: User
}) {
  const [dropdownClick, setDropdownClick] = useState(false)
  const pathname = usePathname()
  const handleDropdown = useCallback(() => {
    setDropdownClick((prevClick) => !prevClick)
  }, [])

  useEffect(() => {
    setDropdownClick(false)
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
        src={darkMode ? Assets.ArrowLightIcon : Assets.ArrowDarkIcon}
        alt="dropdown-arrow"
      />
      <ModalDropdownList
        userId={currentUser ? currentUser._id : ''}
        isOpen={dropdownClick}
      />
    </div>
  )
}
