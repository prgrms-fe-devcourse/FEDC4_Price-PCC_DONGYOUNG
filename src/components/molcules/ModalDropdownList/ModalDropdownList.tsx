import React, { useCallback } from 'react'
import Link from 'next/link'
import { Text } from '@/components/atoms/Text'
import APP_PATH from '@/config/paths'
import { useLogout } from '@/hooks/useLogout'
import './index.scss'

type PropsType = {
  userId: string
  isOpen: boolean
}

function ModalDropdownList({ userId, isOpen }: PropsType) {
  const { logout } = useLogout()

  const handleLogout = useCallback(async () => {
    await logout()
    location.reload()
  }, [logout])

  const containerClassName = `modal-dropdown-container color-bg--bg-1 ${
    isOpen ? 'open' : 'close'
  }`

  return (
    <div className={containerClassName}>
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
