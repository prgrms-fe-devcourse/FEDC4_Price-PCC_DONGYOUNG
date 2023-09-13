import React from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

type LikeDislikeCountProps = {
  like: number
  dislike: number
}
export default function LikeDislikeCount({
  like,
  dislike,
}: LikeDislikeCountProps) {
  return (
    <div className="count-container">
      <div className="count-container__item">
        <Image src={Assets.LikeImage} width={13} height={13} alt="like icon" />
        <span>{like}</span>
      </div>
      <div className="count-container__item">
        <Image
          src={Assets.DislikeImage}
          width={13}
          height={13}
          alt="dislike icon"
        />
        <span>{dislike}</span>
      </div>
    </div>
  )
}
