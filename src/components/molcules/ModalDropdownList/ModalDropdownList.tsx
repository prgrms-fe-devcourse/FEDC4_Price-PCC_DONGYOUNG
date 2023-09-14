'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Text } from '@/components/atoms/Text'
import APP_PATH from '@/config/paths'
import { useLogout } from '@/hooks/useLogout'
import './index.scss'

type PropsType = {
  userId: string
}

export default function ModalDropdownList({ userId }: PropsType) {
  const router = useRouter()
  const { logout } = useLogout()

  const handleLogout = () => {
    logout()
    router.push(APP_PATH.home())
  }

  return (
    <div className="modal-dropdown-container color-bg--bg-1">
      <Link href="/user/edit/profile">
        <Text textStyle="body2-bold">계정 정보 변경</Text>
      </Link>
      <Link href={`/user/${userId}`}>
        <Text textStyle="body2-bold">내 프로필</Text>
      </Link>
      <div className="logout-button" onClick={handleLogout}>
        <Text textStyle="body2-bold">로그아웃</Text>
      </div>
      <Link href="/post/new" className="new-post-link">
        <Text textStyle="body2-bold">게시글 작성</Text>
      </Link>
    </div>
  )
}
