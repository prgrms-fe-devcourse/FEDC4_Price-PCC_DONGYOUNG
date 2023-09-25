import React, { useCallback, useEffect, useRef } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { Text } from '@/components/atoms/Text'
import APP_PATH from '@/config/paths'
import { useLogout } from '@/hooks/useLogout'
import './index.scss'

type PropsType = {
  userId: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function ModalDropdownList({ userId, isOpen, setIsOpen }: PropsType) {
  const avatarDropRef = useRef<HTMLDivElement>(null)
  const { logout } = useLogout()

  const handleLogout = useCallback(async () => {
    await logout()
    Cookies.remove('verified-user', { path: '/' })
    location.reload()
  }, [logout])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        avatarDropRef.current &&
        !avatarDropRef.current.contains(e.target as Node)
      ) {
        setIsOpen(() => false)
      }
    }
    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [avatarDropRef, setIsOpen])

  const containerClassName = `modal-dropdown-container color-bg--bg-1 ${
    isOpen ? 'open' : 'close'
  }`

  return (
    <div className={containerClassName} ref={avatarDropRef}>
      <OptimizedLink href={APP_PATH.editProfile()}>
        <Text textStyle="body2-bold">계정 정보 변경</Text>
      </OptimizedLink>
      <OptimizedLink
        href={userId === '' ? APP_PATH.home() : APP_PATH.userProfile(userId)}
      >
        <Text textStyle="body2-bold">내 프로필</Text>
      </OptimizedLink>
      <div className="logout-button" onClick={handleLogout}>
        <Text textStyle="body2-bold">로그아웃</Text>
      </div>
      <OptimizedLink href={APP_PATH.postNew()} className="new-post-link">
        <Text textStyle="body2-bold">게시글 작성</Text>
      </OptimizedLink>
    </div>
  )
}

const OptimizedLink = React.memo(
  ({
    href,
    children,
    className,
  }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => (
    <Link href={href} className={className} prefetch={false}>
      {children}
    </Link>
  ),
)
OptimizedLink.displayName = 'OptimizedLink'

export default React.memo(ModalDropdownList, (prevProps, nextProps) => {
  return (
    prevProps.userId === nextProps.userId &&
    prevProps.isOpen === nextProps.isOpen
  )
})
