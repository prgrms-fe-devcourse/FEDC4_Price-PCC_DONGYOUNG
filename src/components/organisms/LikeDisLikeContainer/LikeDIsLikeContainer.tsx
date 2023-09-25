'use client'

import { useCallback, useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const { isDark } = useDarkStore()
  const { toggleDisLikeState, toggleLikeState, likeState } =
    useLikeState(initalState)

  const likeImage = isDark ? Assets.DarkLike : Assets.LikeImage

  const disLikeImage = isDark ? Assets.DarkDisLike : Assets.DislikeImage

  const handleClickLike = useCallback(() => {
    toggleLikeState()

    if (onClickLike) {
      setLoading(true)
      onClickLike()
        .then(() => {
          setLoading(false)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [onClickLike, toggleLikeState])

  const handleClickDisLike = useCallback(() => {
    toggleDisLikeState()
    if (onClickDisLike) {
      setLoading(true)
      onClickDisLike()
        .then(() => {
          setLoading(false)
        })
        .finally(() => {
          setLoading(false)
        })
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
            onClick={loading ? undefined : handleClickLike}
            style={{
              cursor: 'pointer',
              transition: 'opacity 1s ease',
            }}
          />

          <Text textStyle="subtitle1-bold">잘 샀어요</Text>
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
            onClick={loading ? undefined : handleClickDisLike}
            style={{
              cursor: 'pointer',
              transition: 'opacity 1s ease',
            }}
          />

          <Text textStyle="subtitle1-bold">흑우에요</Text>
          <span>{dislike}</span>
        </span>
      </>
    </div>
  )
}
