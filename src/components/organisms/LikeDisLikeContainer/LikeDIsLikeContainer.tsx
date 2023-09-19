'use client'

import Image from 'next/image'
import { Text } from '@/components/atoms/Text'
import type { LikeDislikeCountProps } from '@/components/molcules/LikeDislikeCount/LikeDislikeCount'
import Assets from '@/config/assets'
import debounce from '@/utils/debounce'
import LikeDisLikeProgressBar from '../LikeDIsLikeProgressBar'
import './index.scss'

export default function LikeDisLikeContainer({
  like,
  dislike,
  onClickLike,
  onClickDisLike,
}: LikeDislikeCountProps) {
  const handleClickLike = debounce(() => {
    if (onClickLike) {
      onClickLike()
    }
  }, 500)

  const handleClickDisLike = debounce(() => {
    if (onClickDisLike) {
      onClickDisLike()
    }
  }, 500)
  return (
    <div className="like-container">
      <span className="like-container__likes">
        <Image
          className="like-container__likes_image"
          src={Assets.LikeImage}
          alt="likeImage"
          width={30}
          height={30}
          style={{
            cursor: 'pointer',
          }}
          onClick={handleClickLike}
        />
        <Text textStyle="subtitle1-bold">잘 샀어요</Text>
        <span>{like}</span>
      </span>
      <LikeDisLikeProgressBar like={like} dislike={dislike} />

      <span className="like-container__dislikes">
        <Image
          className="like-container__dislikes_image"
          src={Assets.DislikeImage}
          alt="disLikeImage"
          width={30}
          height={30}
          style={{
            cursor: 'pointer',
          }}
          onClick={handleClickDisLike}
        />
        <Text textStyle="subtitle1-bold">흑우에요</Text>
        <span>{dislike}</span>
      </span>
    </div>
  )
}
