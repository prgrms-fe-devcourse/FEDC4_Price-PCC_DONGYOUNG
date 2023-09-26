'use client'

import Cookies from 'js-cookie'
import Assets from '@/config/assets'
import useDarkMode from '@/hooks/useDarkMode'
import ImageButton from '../ImageButton'

type PropsType = {
  _darkMode: boolean
}

export default function DarkModeButton({ _darkMode }: PropsType) {
  const { isDark, toggleDark } = useDarkMode()

  const handleDarkmodeClick = () => {
    Cookies.set('pcc-darkmode', JSON.stringify(!isDark))
    toggleDark()
  }
  return (
    <ImageButton
      size={3}
      src={isDark ? Assets.LIGHTMODE_SVG_PATH : Assets.DARKMODE_SVG_PATH}
      alt={`${isDark ? 'dark' : 'light'} mode button`}
      onClick={handleDarkmodeClick}
    />
  )
}
