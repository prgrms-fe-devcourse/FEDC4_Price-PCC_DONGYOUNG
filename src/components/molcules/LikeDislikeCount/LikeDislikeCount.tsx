import React from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

export default function LikeDislikeCount() {
  const like = 230
  const dislike = 170
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
