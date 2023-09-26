'use client'

import { useEffect, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import type { LikeDislikeCountProps } from '@/components/molcules/LikeDislikeCount/LikeDislikeCount'
import useDarkStore from '@/stores/darkMode'

export default function LikeDisLikeProgressBar({
  like,
  dislike,
}: LikeDislikeCountProps) {
  const totalCount = like + dislike
  const ratio = totalCount > 0 ? Math.floor((like / totalCount) * 100) : 0
  const [isDarkState, setIsDarkState] = useState(false)
  const { isDark } = useDarkStore()
  useEffect(() => {
    setIsDarkState(isDark)
  }, [isDark])
  return (
    <ProgressBar
      completed={ratio}
      width={`27vw`}
      height={`${30 / 16}rem`}
      bgColor="#ffdf5f"
      baseBgColor={`${isDarkState ? '#191F28' : '#fffaea'}`}
    />
  )
}
