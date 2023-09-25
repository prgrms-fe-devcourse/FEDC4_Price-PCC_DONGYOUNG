'use client'

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetAllPosts from '@/queries/channel'
import CardGridTemplate from '.'

export default function GridController() {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts()

  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })

  return (
    <CardGridTemplate
      postDatas={data?.pages.flat() ?? []}
      ref={observerElem}
      isShowOptions={false}
    />
  )
}
