'use client'

import Avatar from '@/components/atoms/Avatar'
import './index.scss'

export type CommentProps = {
  _id: string
  comment: string
  createAt?: string
  updatedAt?: string
  author: {
    email?: string
    coverImage?: string
    image?: string
    isOnline?: boolean
    _id?: string
    fullName: string
    createdAt?: string
    updatedAt?: string
    __v?: number
  }
}

type CommentAuthorProps = Pick<CommentProps, 'author'>

type CommentItemProps = Pick<CommentProps, 'comment'>

export default function Comment({ comment, author }: CommentProps) {
  return (
    <div className="comment__container">
      <User author={author} />
      <CommentItem comment={comment} />
    </div>
  )
}

function User({ author }: CommentAuthorProps) {
  return (
    <div className="comment__container__user">
      <Avatar
        size={40}
        text={author.fullName}
        src={author.image}
        textStyle={{
          width: '120px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      />
    </div>
  )
}

function CommentItem({ comment }: CommentItemProps) {
  return <div className="comment__container__item">{comment}</div>
}
