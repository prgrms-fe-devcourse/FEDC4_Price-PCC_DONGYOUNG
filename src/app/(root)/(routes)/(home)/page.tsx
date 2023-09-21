'use client'

import { useRouter } from 'next/navigation'
import CirclePlusButton from '@/components/atoms/CirclePlusButton'
import CardGridTemplate from '@/components/templates/CardGridTemplate'
import APP_PATH from '@/config/paths'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetAllPosts from '@/queries/channel'

export default function Home() {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts()

  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })
  const router = useRouter()

  return (
    <>
      <CardGridTemplate postDatas={data?.pages.flat()} ref={observerElem} />
      <CirclePlusButton onClick={() => router.push(APP_PATH.postNew())} />
    </>
  )
}
