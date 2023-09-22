'use client'

import { useEffect } from 'react'
import { useCurrentUser } from '@/hooks/useCurrentUser'
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
  const { isLoggedIn, currentUser } = useCurrentUser()
  const { data, refetch } = useGetComment(postId, initComments)

  useEffect(() => {
    refetch()
  }, [refetch])

  const handleOnDeleteComment = (commentId: string) => {
    const onDeleteComment = async () => {
      await deleteComment(commentId)
      refetch()
    }

    onDeleteComment()
  }

  const commentsWithValid = data?.post?.comments.map((comment: Comment) => ({
    ...comment,
    isValidUser:
      isLoggedIn && currentUser && comment.author._id === currentUser._id,
  }))

  return (
    <CommentList
      comments={commentsWithValid}
      onDeleteComment={handleOnDeleteComment}
    />
  )
}
