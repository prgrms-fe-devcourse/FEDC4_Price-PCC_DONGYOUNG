'use client'

import { useQuery } from '@tanstack/react-query'
import { Comment } from '@/components/molcules/Comment'
import type { CommentProps } from '@/components/molcules/Comment/Comment'
import { fetchPostDetail } from '@/services/post'
import './index.scss'

export default function CommentList({
  initComments,
  postId,
}: {
  initComments: CommentProps[] | any
  postId: string
}) {
  //타입 고칠 필요 있음
  const { data } = useQuery({
    queryFn: () => fetchPostDetail(postId),
    queryKey: ['postDetail', postId],
    initialData: initComments,
  })

  const { comments }: { comments: CommentProps[] } = data.post.comments
  return (
    <div className="comment--list">
      {comments.map(({ _id, authorImage, authorName, comment }) => (
        <Comment
          key={_id}
          _id={_id}
          authorName={authorName}
          authorImage={authorImage}
          comment={comment}
        />
      ))}
    </div>
  )
}
