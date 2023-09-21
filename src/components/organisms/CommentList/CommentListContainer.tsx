'use client'

import { useEffect } from 'react'
import useGetComment from '@/queries/comments'
import { deleteComment } from '@/services/comment'
import type Comment from '@/types/comment'
import { CommentList } from '.'

export default function CommentListContainer({
  postId,
  initComments,
}: {
  postId: string
  initComments: Comment[]
}) {
  const { data, refetch } = useGetComment(postId, initComments)

  const handleOnDeleteComment = (commentId: string) => {
    const onDeleteComment = async () => {
      await deleteComment(commentId)
      refetch()
    }

    onDeleteComment()
  }

  useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <CommentList
      comments={data?.post?.comments}
      onDeleteComment={handleOnDeleteComment}
    />
  )
}
