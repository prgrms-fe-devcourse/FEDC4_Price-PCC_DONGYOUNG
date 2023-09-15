'use client'

import Avatar from '@/components/atoms/Avatar'
import type { default as CommentProps } from '@/types/comment'
import './index.scss'

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
        size={2}
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
