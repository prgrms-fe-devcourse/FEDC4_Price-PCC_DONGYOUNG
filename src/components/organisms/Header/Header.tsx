import { cookies } from 'next/headers'
import Link from 'next/link'
import DarkModeButton from '@/components/atoms/DarkModeButton'
import NotificationButton from '@/components/atoms/NotificationButton'
import SearchBar from '@/components/atoms/SearchBar'
import { Text } from '@/components/atoms/Text'
import AvatarDropdown from '@/components/molcules/AvatarDropdown/AvatarDropdown'
import APP_PATH from '@/config/paths'
import { validateToken } from '@/services/auth'
import './index.scss'

async function updateCookie(key: string, value: string) {
  const cookieStore = cookies()
  cookieStore.set(key, value)
}

export default async function Header() {
  const cookieStore = cookies()
  const data = validateToken()

  let systemDarkmode = false
  if (typeof window !== 'undefined') {
    systemDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const cookieVal = cookieStore.get('pcc-darkmode')

  let darkMode = JSON.parse(cookieVal?.value!)

  if (!cookieVal) {
    updateCookie('pcc-darkmode', JSON.stringify(systemDarkmode))
    darkMode = systemDarkmode
  }

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
      {!data ? (
        <div className="sign-container">
          <LinkButton href={APP_PATH.login()}>로그인</LinkButton>
          <LinkButton href={APP_PATH.register()}>회원가입</LinkButton>
        </div>
      ) : (
        <AvatarDropdown darkmode={darkMode} />
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
