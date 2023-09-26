'use client'

import { useEffect } from 'react'
import Cookies from 'js-cookie'
import _ from 'lodash'
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
  useEffect(() => {
    toggleDark()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cookies.get('pcc-darkmode')])

  return (
    <ImageButton
      size={3}
      src={isDark ? Assets.LIGHTMODE_SVG_PATH : Assets.DARKMODE_SVG_PATH}
      alt={`${isDark ? 'dark' : 'light'} mode button`}
      onClick={handleDarkmodeClick}
    />
  )
}
