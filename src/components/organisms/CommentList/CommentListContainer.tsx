'use client'

import { useEffect } from 'react'
import Loading from '@/components/atoms/Loading'
import { notify } from '@/components/atoms/Toast'
import { useAuth } from '@/lib/contexts/authProvider'
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
  const { isLoggedIn, currentUser } = useAuth()
  const { data, refetch, isFetching } = useGetComment(postId, initComments)

  useEffect(() => {
    refetch()
  }, [refetch])

  const handleOnDeleteComment = (commentId: string) => {
    const onDeleteComment = async () => {
      await deleteComment(commentId)
      notify('info', '댓글이 삭제되었습니다.')
      refetch()
    }

    onDeleteComment()
  }

  const commentsWithValid = data?.post?.comments.map((comment: Comment) => ({
    ...comment,
    isValidUser:
      isLoggedIn && currentUser && comment.author._id === currentUser._id,
  }))

  return isFetching ? (
    <Loading size={5} />
  ) : (
    <CommentList
      comments={commentsWithValid}
      onDeleteComment={handleOnDeleteComment}
    />
  )
}
