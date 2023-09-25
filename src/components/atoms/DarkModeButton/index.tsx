'use client'

import { useState } from 'react'
import Cookies from 'js-cookie'
import Assets from '@/config/assets'
import useDarkMode from '@/hooks/useDarkMode'
import ImageButton from '../ImageButton'

type PropsType = {
  _darkMode: boolean
}

export default function DarkModeButton({ _darkMode }: PropsType) {
  const { isDark, toggleDark } = useDarkMode()
  const [darkmode, setDarkMode] = useState(false)

  const handleDarkmodeClick = () => {
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
    Cookies.set('pcc-darkmode', JSON.stringify(!isDark))
    toggleDark()
    setDarkMode(!darkmode)
  }
  return (
    <ImageButton
      size={3}
      src={darkmode ? Assets.LIGHTMODE_SVG_PATH : Assets.DARKMODE_SVG_PATH}
      alt={`${isDark ? 'dark' : 'light'} mode button`}
      onClick={handleDarkmodeClick}
    />
  )
}
