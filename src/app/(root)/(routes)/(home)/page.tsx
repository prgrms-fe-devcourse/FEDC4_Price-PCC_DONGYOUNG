'use client'

import CardGridTemplate from '@/components/templates/CardGridTemplate'
import useFetchAllPosts from '@/queries/channel'

const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID as string

export default function Home() {
  const { data } = useFetchAllPosts(CHANNEL_ID)
  return <CardGridTemplate postDatas={data?.posts} />
}
