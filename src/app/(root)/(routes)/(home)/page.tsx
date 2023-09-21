'use client'

import CardGridTemplate from '@/components/templates/CardGridTemplate'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetAllPosts from '@/queries/channel'

export default function Home() {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts()

  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })

  return (
    <CardGridTemplate
      postDatas={data?.pages.flat()}
      ref={observerElem}
      isShowOptions={false}
    />
  )
}
