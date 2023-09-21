'use client'

import { useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import NotificationButton from '@/components/atoms/NotificationButton'
import SearchBar from '@/components/atoms/SearchBar'
import { Text } from '@/components/atoms/Text'
import { ModalDropdownList } from '@/components/molcules/ModalDropdownList'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import './index.scss'

const DynamicDarkModeButton = dynamic(
  () => import('@/components/atoms/DarkModeButton'),
  { ssr: false },
)

export default function Header() {
  const [dropdownClick, setDropdownClick] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { currentUser } = useCurrentUser()

  const cachedCurrentUser = useMemo(() => currentUser, [currentUser])

  const handleDropdown = useCallback(() => {
    setDropdownClick((prevClick) => !prevClick)
  }, [])

  const changeDarkMode = useCallback((value: boolean) => {
    setIsDarkMode(value)
  }, [])

  return (
    <div className="header-container color-bg--bg-1">
      <SearchBar />
      <div className="header-button-container">
        <NotificationButton />
        <DynamicDarkModeButton changeDarkMode={changeDarkMode} />
      </div>
      {cachedCurrentUser ? (
        <div className="header-user-container" onClick={handleDropdown}>
          <Avatar
            src={cachedCurrentUser ? cachedCurrentUser.image : Assets.PCCImage}
            size={3}
            text={cachedCurrentUser ? cachedCurrentUser.fullName : ''}
            textStyle={{
              fontWeight: 'bold',
              padding: '0 0.5rem 0 0.5rem',
              wordBreak: 'keep-all',
            }}
          />
          <Image
            src={isDarkMode ? Assets.ArrowLightIcon : Assets.ArrowDarkIcon}
            alt="dropdown-arrow"
          />
          <ModalDropdownList
            userId={cachedCurrentUser ? cachedCurrentUser._id : ''}
            isOpen={dropdownClick}
          />
        </div>
      ) : (
        <div className="sign-container">
          <LinkButton href={APP_PATH.login()}>로그인</LinkButton>
          <LinkButton href={APP_PATH.register()}>회원가입</LinkButton>
        </div>
      )}
    </div>
  )
}

const LinkButton = ({ href, children }: { href: string; children: string }) => (
  <Link href={href}>
    <Text
      textStyle="subtitle1-bold"
      color="gray-3"
      className="header-text_button"
    >
      {children}
    </Text>
  </Link>
)
