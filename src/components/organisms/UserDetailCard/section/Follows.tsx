'use client'

import React from 'react'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import useFollow from '@/hooks/useFollow'
import User from '@/types/user'

export default function Follows({ userData }: { userData: User }) {
  const {
    unavailable,
    isFollowing,
    followToggle,
    followerCount,
    followingCount,
  } = useFollow(userData)

  return (
    <>
      <div className="follow_info">
        <InfoCount text="팔로워" number={followerCount.toString()} />
        <InfoCount text="팔로잉" number={followingCount.toString()} />
      </div>
      <div className="follow_buttons">
        {unavailable ? (
          <Button text="팔로우" variant="disabled" width={10} />
        ) : (
          <Button
            text="팔로우"
            variant={isFollowing ? 'done' : 'default'}
            width={10}
            onClick={followToggle}
          />
        )}
      </div>
    </>
  )
}

const InfoCount = ({
  text,
  number = '0',
}: {
  text: string
  number?: string
}) => {
  return (
    <div className="info_count">
      <Text textStyle="body1-bold">{text}</Text>
      <Text textStyle="body1-bold">{number}</Text>
    </div>
  )
}
