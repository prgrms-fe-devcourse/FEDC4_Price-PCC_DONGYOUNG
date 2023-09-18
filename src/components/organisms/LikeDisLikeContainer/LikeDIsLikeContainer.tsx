'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms/Text'
import type { LikeDislikeCountProps } from '@/components/molcules/LikeDislikeCount/LikeDislikeCount'
import Assets from '@/config/assets'
import LikeDisLikeProgressBar from '../LikeDIsLikeProgressBar'
import './index.scss'

export default function LikeDisLikeContainer({
  like,
  dislike,
  onClickLike,
  onClickDisLike,
}: LikeDislikeCountProps) {
  const handleClickLike = useCallback(() => {
    if (onClickLike) onClickLike()
  }, [onClickLike])

  const handleClickDisLike = useCallback(() => {
    if (onClickDisLike) onClickDisLike()
  }, [onClickDisLike])
  return (
    <div className="like-container">
      <Image
        src={Assets.LikeImage}
        alt="likeImage"
        width={30}
        height={30}
        onClick={handleClickLike}
      />
      <Text textStyle="subtitle1">잘 샀어요</Text>
      <LikeDisLikeProgressBar like={like} dislike={dislike} />
      <Image
        src={Assets.DislikeImage}
        alt="disLikeImage"
        width={30}
        height={30}
        onClick={handleClickDisLike}
      />
      <Text textStyle="subtitle1">흑우에요</Text>
    </div>
  )
}
