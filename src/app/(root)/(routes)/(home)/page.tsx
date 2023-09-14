'use client'

import { useEffect, useRef } from 'react'
import CardGridTemplate from '@/components/templates/CardGridTemplate'
import useGetAllPosts from '@/queries/channel'

const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID as string

export default function Home() {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts(CHANNEL_ID)

  const observerElem = useRef(null)

  useEffect(() => {
    const element = observerElem.current
    const option = { threshold: 0.5 }

    const io = new IntersectionObserver((entries) => {
      const [target] = entries
      if (target.isIntersecting) {
        fetchNextPage()
      }
    }, option)

    if (hasNextPage && element) {
      io.observe(element)
      return () => io.unobserve(element)
    }
  }, [fetchNextPage, hasNextPage])

  return <CardGridTemplate postDatas={data?.pages.flat()} ref={observerElem} />
}
