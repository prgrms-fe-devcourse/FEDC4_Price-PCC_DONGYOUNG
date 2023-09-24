'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import Avatar from '@/components/atoms/Avatar'
import Assets from '@/config/assets'
import { useAuth } from '@/lib/contexts/authProvider'
import ModalDropdownList from '../ModalDropdownList'
import './index.scss'

export default function AvatarDropdown({ darkmode }: { darkmode: boolean }) {
  const { currentUser } = useAuth()
  const [dropdownClick, setDropdownClick] = useState(false)
  const handleDropdown = useCallback(() => {
    setDropdownClick((prevClick) => !prevClick)
  }, [])
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
        isOpen={dropdownClick}
      />
    </div>
  )
}
