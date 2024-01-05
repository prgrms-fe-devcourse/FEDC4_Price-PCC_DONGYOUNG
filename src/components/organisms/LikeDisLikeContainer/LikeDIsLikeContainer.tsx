'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms/Text'
import type { LikeDislikeCountProps } from '@/components/molcules/LikeDislikeCount/LikeDislikeCount'
import Assets from '@/config/assets'
import useLikeState from '@/hooks/useLikeState'
import useDarkStore from '@/stores/darkMode'
import LikeDisLikeProgressBar from '../LikeDIsLikeProgressBar'
import './index.scss'

export default function LikeDislikeContainer({
  like,
  dislike,
  onClickLike,
  onClickDisLike,
  initalState,
}: LikeDislikeCountProps) {
  const { toggleDisLikeState, toggleLikeState, likeState } =
    useLikeState(initalState)

  const [isDarkState, setIsDarkState] = useState(false)
  const { isDark } = useDarkStore()
  useEffect(() => {
    setIsDarkState(isDark)
  }, [isDark])
  const likeImage = isDarkState ? Assets.LikeWhite : Assets.LikeImage

  const disLikeImage = isDarkState ? Assets.DislikeWhite : Assets.DislikeImage

  const handleClickLike = useCallback(() => {
    toggleLikeState()

    if (onClickLike) {
      onClickLike()
    }
  }, [onClickLike, toggleLikeState])

  const handleClickDisLike = useCallback(() => {
    toggleDisLikeState()
    if (onClickDisLike) {
      onClickDisLike()
    }
  }, [onClickDisLike, toggleDisLikeState])

  return (
    <div className="like-container">
      <>
        <span className="like-container__likes">
          <Image
            src={
              likeState === 'like' || likeState === 'both'
                ? Assets.ActiveLike
                : likeImage
            }
            alt="좋아요 이미지"
            width={30}
            height={30}
            onClick={handleClickLike}
            style={{
              cursor: 'pointer',
            }}
          />

          <Text textStyle="subtitle2">꿀매에요</Text>
          <span>{like}</span>
        </span>
        <LikeDisLikeProgressBar
          like={like}
          dislike={dislike}
          initalState="init"
        />
        <span className="like-container__dislikes">
          <Image
            src={
              likeState === 'dislike' || likeState === 'both'
                ? Assets.ActiveDisLike
                : disLikeImage
            }
            alt="싫어요 이미지"
            width={30}
            height={30}
            onClick={handleClickDisLike}
            style={{
              cursor: 'pointer',
            }}
          />

          <Text textStyle="subtitle2">흑우에요</Text>
          <span>{dislike}</span>
        </span>
      </>
    </div>
  )
}
