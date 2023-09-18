'use client'

import UserDetailPageTemplate from '@/components/templates/UserDetailPageTemplate'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetUserPosts from '@/queries/posts'

export default function User({
  params: { userId },
}: {
  params: { userId: string }
}) {
  const { data, fetchNextPage, hasNextPage } = useGetUserPosts(userId)
  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })

  return (
    <UserDetailPageTemplate userPosts={data?.pages.flat()} ref={observerElem} />
  )
}
