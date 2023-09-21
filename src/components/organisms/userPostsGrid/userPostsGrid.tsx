'use client'

import CardGridTemplate from '@/components/templates/CardGridTemplate'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetUserPosts from '@/queries/posts'
import Post from '@/types/post'
import './index.scss'

export default function UserPostsGrid({ userId }: { userId: string }) {
  const { data, fetchNextPage, hasNextPage } = useGetUserPosts(userId)
  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })

  const uniquePosts = data?.pages.flat().reduce((unique, post) => {
    if (!unique.some((uniquePost: Post) => uniquePost._id === post._id)) {
      unique.push(post)
    }
    return unique
  }, [])

  return <CardGridTemplate postDatas={uniquePosts} ref={observerElem} />
}
