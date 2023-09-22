'use client'

import Avatar from '@/components/atoms/Avatar'
import type { default as CommentProps } from '@/types/comment'
import './index.scss'

type CommentPropsWithChild = CommentProps & {
  children?: React.ReactNode
}

type CommentAuthorProps = Pick<CommentProps, 'author'>

type CommentItemProps = Pick<CommentProps, 'comment'> & {
  children?: React.ReactNode
}

export default function Comment({
  comment,
  author,
  children,
}: CommentPropsWithChild) {
  return (
    <div className="comment__container">
      <User author={author} />
      <CommentItem comment={comment}>{children}</CommentItem>
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

function CommentItem({ comment, children }: CommentItemProps) {
  return (
    <div className="comment__container__item">
      {children}
      {comment}
    </div>
  )
}
