'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'

export default function DarkModeButton() {
  const [mode, setMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  )

  if (mode === 'dark') {
    document.body.classList.add('pcc-theme--dark')
    document.body.classList.remove('pcc-theme--light')
  }

  const handleDarkmodeClick = () => {
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button onClick={handleDarkmodeClick}>
      {mode === 'dark' ? (
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
