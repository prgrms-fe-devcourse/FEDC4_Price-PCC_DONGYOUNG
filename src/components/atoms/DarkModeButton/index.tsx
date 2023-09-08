import React from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'
import { useDarkMode } from '@/hooks/useDarkMode'

export default function DarkModeButton() {
  const {
    mode: { dark },
    setMode,
  } = useDarkMode()

  const handleDarkmodeClick = () => {
    setMode((prevMode) => ({
      dark: !prevMode,
    }))
  }

  return (
    <button onClick={handleDarkmodeClick}>
      {dark ? (
        <Image
          src={Assets.LIGHTMODE_SVG_PATH}
          width={30}
          height={30}
          alt="dark mode button"
        />
      ) : (
        <Image
          src={Assets.DARKMODE_SVG_PATH}
          width={30}
          height={30}
          alt="dark mode button"
        />
      )}
    </button>
  )
}
