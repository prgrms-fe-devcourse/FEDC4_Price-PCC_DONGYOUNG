'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms/Text'
import type { LikeDislikeCountProps } from '@/components/molcules/LikeDislikeCount/LikeDislikeCount'
import Assets from '@/config/assets'
import LikeDisLikeProgressBar from '../LikeDIsLikeProgressBar'
import './index.scss'

// ... (other imports)

export default function LikeDislikeContainer({
  like,
  dislike,
  onClickLike,
  onClickDisLike,
}: LikeDislikeCountProps) {
  const [loading, setLoading] = useState(false)

  const handleClickLike = useCallback(() => {
    if (onClickLike) {
      setLoading(true)
      onClickLike()
        .then(() => {
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }, [onClickLike])

  const handleClickDisLike = useCallback(() => {
    if (onClickDisLike) {
      setLoading(true)
      onClickDisLike()
        .then(() => {
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }, [onClickDisLike])

  return (
    <div className="like-container">
      <>
        <span className="like-container__likes">
          <Image
            src={Assets.LikeImage}
            alt="좋아요 이미지"
            width={30}
            height={30}
            onClick={loading ? undefined : handleClickLike}
            style={{
              cursor: 'pointer',
            }}
          />
          <Text textStyle="subtitle1-bold">잘 샀어요</Text>
          <span>{like}</span>
        </span>
        <LikeDisLikeProgressBar like={like} dislike={dislike} />
        <span className="like-container__dislikes">
          <Image
            width={30}
            height={30}
            src={Assets.DislikeImage}
            alt="싫어요 이미지"
            onClick={loading ? undefined : handleClickDisLike}
            style={{
              cursor: 'pointer',
            }}
          />

          <Text textStyle="subtitle1-bold">흑우에요</Text>
          <span>{dislike}</span>
        </span>
      </>
    </div>
  )
}
