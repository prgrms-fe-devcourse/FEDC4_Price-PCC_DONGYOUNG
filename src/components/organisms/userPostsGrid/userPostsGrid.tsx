'use client'

import CardGridTemplate from '@/components/templates/CardGridTemplate'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetUserPosts from '@/queries/posts'
import './index.scss'

export default function UserPostsGrid({ userId }: { userId: string }) {
  const { data, fetchNextPage, hasNextPage } = useGetUserPosts(userId)
  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })

  const posts = data?.pages.flat()

  return <CardGridTemplate postDatas={posts} ref={observerElem} />
}
