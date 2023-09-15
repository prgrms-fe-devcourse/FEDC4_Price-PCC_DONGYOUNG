'use client'

import CardGridTemplate from '@/components/templates/CardGridTemplate'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetAllPosts from '@/queries/channel'

const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID as string

export default function Home() {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts(CHANNEL_ID)

  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })

  return <CardGridTemplate postDatas={data?.pages.flat()} ref={observerElem} />
}
