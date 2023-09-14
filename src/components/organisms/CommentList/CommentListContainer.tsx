'use client'

import { useQuery } from '@tanstack/react-query'
import { CommentProps } from '@/components/molcules/Comment/Comment'
import { fetchPostDetail } from '@/services/post'
import { CommentList } from '.'

export default function CommentListContainer({
  postId,
  initComments,
}: {
  postId: string
  initComments: CommentProps[]
}) {
  const { data } = useQuery({
    queryFn: () => fetchPostDetail(postId),
    queryKey: ['postDetail', postId],
    initialData: initComments,
  })

  const { comments }: { comments: CommentProps[] } = data.post
  return <CommentList comments={comments} />
}
