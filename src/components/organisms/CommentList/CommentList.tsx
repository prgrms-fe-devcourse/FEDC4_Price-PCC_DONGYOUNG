'use client'

import { Comment } from '@/components/molcules/Comment'
import type { CommentProps } from '@/components/molcules/Comment/Comment'
import './index.scss'

export default function CommentList({
  comments,
}: {
  comments: CommentProps[]
}) {
  return (
    <div className="comment--list">
      {comments.map(({ _id, author, comment }) => (
        <Comment key={_id} _id={_id} author={author} comment={comment} />
      ))}
    </div>
  )
}
