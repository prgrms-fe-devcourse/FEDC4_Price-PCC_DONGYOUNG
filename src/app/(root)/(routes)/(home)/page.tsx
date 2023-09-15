'use client'

import CardGridTemplate from '@/components/templates/CardGridTemplate'
import useGetAllPosts from '@/queries/channel'

const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID as string

export default function Home() {
  const { data } = useGetAllPosts(CHANNEL_ID)
  return <CardGridTemplate postDatas={data?.posts} />
}
