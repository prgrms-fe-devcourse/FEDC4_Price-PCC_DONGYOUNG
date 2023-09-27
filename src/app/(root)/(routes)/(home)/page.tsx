import React from 'react'
import Link from 'next/link'
import CirclePlusButton from '@/components/atoms/CirclePlusButton'
import HydrateCardGrid from '@/components/templates/CardGridTemplate/HydrateCardGrid'
import APP_PATH from '@/config/paths'

export default function Home() {
  return (
    <>
      <HydrateCardGrid />
      <Link href={APP_PATH.postNew()}>
        <CirclePlusButton />
      </Link>
    </>
  )
}
