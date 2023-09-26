import React from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import useDarkMode from '@/hooks/useDarkMode'
import './index.scss'

export type LikeDislikeCountProps = {
  like: number
  dislike: number
  onClickLike?: () => Promise<void>
  onClickDisLike?: () => Promise<void>
  initalState: 'like' | 'dislike' | 'init' | 'both'
}
export default function LikeDislikeCount({
  like,
  dislike,
}: LikeDislikeCountProps) {
  const { isDark } = useDarkMode()
  return (
    <div className="count-container">
      <div className="count-container__item">
        <Image
          src={isDark ? Assets.DarkDisLike : Assets.LikeImage}
          width={13}
          height={13}
          alt="like icon"
        />
        <Text textStyle="caption1">{`${like}`}</Text>
      </div>
      <div className="count-container__item">
        <Image
          src={isDark ? Assets.DarkDisLike : Assets.DislikeImage}
          width={13}
          height={13}
          alt="dislike icon"
        />
        <Text textStyle="caption1">{`${dislike}`}</Text>
      </div>
    </div>
  )
}
