'use client'

import Avatar from '@/components/atoms/Avatar'
import './index.scss'

export type CommentProps = {
  _id: string
  comment: string
  createAt?: string
  updatedAt?: string
  authorName: string
  authorImage: string
}

type CommentAuthorProps = Pick<CommentProps, 'authorImage' | 'authorName'>

type CommentItemProps = Pick<CommentProps, 'comment'>

export default function Comment({
  comment,
  authorImage,
  authorName,
}: CommentProps) {
  return (
    <div className="comment__container">
      <User authorImage={authorImage} authorName={authorName} />
      <CommentItem comment={comment} />
    </div>
  )
}

function User({ authorImage, authorName }: CommentAuthorProps) {
  return (
    <div className="comment__container__user">
      <Avatar
        size={40}
        text={authorName}
        src={authorImage}
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