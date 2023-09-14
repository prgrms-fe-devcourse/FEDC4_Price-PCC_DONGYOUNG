'use client'

import useGetComment from '@/queries/comments'
import type Comment from '@/types/comment'
import { CommentList } from '.'

export default function CommentListContainer({
  postId,
  initComments,
}: {
  postId: string
  initComments: Comment[]
}) {
  const { data } = useGetComment(postId, initComments)

  return <CommentList comments={data?.post?.comments} />
}
