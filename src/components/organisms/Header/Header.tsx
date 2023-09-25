import { cookies } from 'next/headers'
import Link from 'next/link'
import DarkModeButton from '@/components/atoms/DarkModeButton'
import NotificationButton from '@/components/atoms/NotificationButton'
import SearchBar from '@/components/atoms/SearchBar'
import { Text } from '@/components/atoms/Text'
import AvatarDropdown from '@/components/molcules/AvatarDropdown/AvatarDropdown'
import { constants } from '@/config/constants'
import { Environment } from '@/config/environments'
import APP_PATH from '@/config/paths'
import { useDarkmodeCookie } from '@/hooks/useDarkmodeCookie'
import User from '@/types/user'
import './index.scss'

export const getCurrentUser = async (): Promise<User | null | undefined> => {
  const cookieStore = cookies()
  const token = cookieStore.get(constants.AUTH_TOKEN)

  try {
    const res = await fetch(`${Environment.baseUrl()}/auth-user`, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
      next: {
        tags: ['auth'],
      },
    })
    const data = await res.json()
    return data
  } catch (e) {
    return null
  }
}

export default async function Header() {
  const currentUser = await getCurrentUser()

  let systemDarkmode = false
  if (typeof window !== 'undefined') {
    systemDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const { darkMode } = useDarkmodeCookie(systemDarkmode)

  if (typeof window !== 'undefined') {
    if (darkMode) {
      document.body.classList.add('pcc-theme--dark')
      document.body.classList.remove('pcc-theme--light')
    }
  }

  return (
    <div className="header-container color-bg--bg-1">
      <SearchBar />
      <div className="header-button-container">
        <NotificationButton />
        <DarkModeButton darkMode={darkMode} />
      </div>
      {!currentUser ? (
        <div className="sign-container">
          <LinkButton href={APP_PATH.login()}>로그인</LinkButton>
          <LinkButton href={APP_PATH.register()}>회원가입</LinkButton>
        </div>
      ) : (
        <AvatarDropdown darkmode={darkMode} currentUser={currentUser} />
      )}
    </div>
  )
}

const LinkButton = ({ href, children }: { href: string; children: string }) => (
  <Link href={href} prefetch={false}>
    <Text
      textStyle="subtitle1-bold"
      color="gray-3"
      className="header-text_button"
    >
      {children}
    </Text>
  </Link>
)
