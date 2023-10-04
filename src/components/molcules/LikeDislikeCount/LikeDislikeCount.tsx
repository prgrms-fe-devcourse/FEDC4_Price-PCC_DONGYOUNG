import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import useDarkStore from '@/stores/darkMode'
import './index.scss'

export type LikeDislikeCountProps = {
  like: number
  dislike: number
  onClickLike?: () => void
  onClickDisLike?: () => void
  initalState: 'like' | 'dislike' | 'init' | 'both'
}
export default function LikeDislikeCount({
  like,
  dislike,
}: LikeDislikeCountProps) {
  const [isDarkState, setIsDarkState] = useState(false)
  const { isDark } = useDarkStore()
  useEffect(() => {
    setIsDarkState(isDark)
  }, [isDark])
  return (
    <div className="count-container">
      <div className="count-container__item">
        <Image
          src={isDarkState ? Assets.LikeWhite : Assets.LikeImage}
          width={13}
          height={13}
          alt="like icon"
        />
        <Text textStyle="caption1">{`${like}`}</Text>
      </div>
      <div className="count-container__item">
        <Image
          src={isDarkState ? Assets.DislikeWhite : Assets.DislikeImage}
          width={13}
          height={13}
          alt="dislike icon"
        />
        <Text textStyle="caption1">{`${dislike}`}</Text>
      </div>
    </div>
  )
}
