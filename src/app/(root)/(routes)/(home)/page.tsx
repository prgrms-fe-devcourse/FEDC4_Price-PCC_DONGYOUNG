'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CirclePlusButton from '@/components/atoms/CirclePlusButton'
import CardGridTemplate from '@/components/templates/CardGridTemplate'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetAllPosts from '@/queries/channel'

export default function Home() {
  const { currentUser } = useCurrentUser()
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts(currentUser)

  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })
  const router = useRouter()

  return (
    <>
      <CardGridTemplate
        postDatas={data?.pages.flat() ?? []}
        ref={observerElem}
        isShowOptions={false}
      />
      <CirclePlusButton onClick={() => router.push(APP_PATH.postNew())} />
    </>
  )
}
