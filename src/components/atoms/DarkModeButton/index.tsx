'use client'

import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Assets from '@/config/assets'
import useStorage from '@/hooks/useStorage'
import { fetchPostDetail } from '@/services/post'

export default function DarkModeButton({ postId }: { postId: string }) {
  let isSystemDark = false

  const { data, error } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: () => fetchPostDetail(postId),
    initialData: postId,
  })

  console.log(data, error)

  if (typeof window !== 'undefined') {
    isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [darkMode, setDarkMode] = useStorage<boolean>({
    storageType: 'local',
    key: 'pcc-darkmode',
    initialValue: isSystemDark,
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('pcc-theme--dark')
      document.body.classList.remove('pcc-theme--light')
    }
  }, [darkMode])

  const handleDarkmodeClick = () => {
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <button onClick={handleDarkmodeClick}>
        <Image
          src={darkMode ? Assets.DARKMODE_SVG_PATH : Assets.LIGHTMODE_SVG_PATH}
          width={30}
          height={30}
          alt={`${darkMode ? 'dark' : 'light'} mode button`}
        />
      </button>
    </div>
  )
}
