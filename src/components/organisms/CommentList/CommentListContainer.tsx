'use client'

import { useEffect } from 'react'
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
  const { data, refetch } = useGetComment(postId, initComments)

  useEffect(() => {
    refetch()
  }, [refetch])

  return <CommentList comments={data?.post?.comments} />
}
