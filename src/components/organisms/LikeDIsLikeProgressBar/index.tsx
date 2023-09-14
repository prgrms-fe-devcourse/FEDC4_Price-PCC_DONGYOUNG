'use client'

import ProgressBar from '@ramonak/react-progress-bar'
import type { LikeDislikeCountProps } from '@/components/molcules/LikeDislikeCount/LikeDislikeCount'

export default function LikeDisLikeProgressBar({
  like,
  dislike,
}: LikeDislikeCountProps) {
  const totalCount = like + dislike
  const ratio = totalCount > 0 ? Math.floor((like / totalCount) * 100) : 0

  return (
    <ProgressBar
      completed={ratio}
      width={`${569 / 16}rem`}
      height={`${30 / 16}rem`}
      bgColor="#ffdf5f"
      baseBgColor="#fffaea"
    />
  )
}
