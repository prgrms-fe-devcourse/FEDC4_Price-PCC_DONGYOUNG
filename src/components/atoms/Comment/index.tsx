'use client'

import Avatar from '../Avatar'
import './index.scss'

type CommentProps = {
  _id: string
  comment: string
  createAt?: string
  updatedAt?: string
  author: {
    fullName: string
    image: string
  }
}

export default function Comment({ _id, author, comment }: CommentProps) {
  return (
    <div className="comment__container">
      <div className="comment__container__user">
        <Avatar size={40} text={author.fullName} src={author.image} />
      </div>
      <div className="comment__container__item">{comment}</div>
    </div>
  )
}
