'use client'

import React, { useState } from 'react'
import FollowToggleButton from '@/components/atoms/FollowToggleButton'
import { Text } from '@/components/atoms/Text'
import ModalProvider from '@/components/molcules/ModalLayout'
import FollowList from '@/components/organisms/FollowList'
import useFollow from '@/hooks/useFollow'
import useModal from '@/hooks/useModal'
import User from '@/types/user'

export default function Follows({ userData }: { userData: User }) {
  const { followerCount, followingCount } = useFollow(userData)

  const { isModalOpen, handleModalOpen, handleModalClose } = useModal()
  const [isFollowerModal, setIsFollowerModal] = useState(false)

  const handleFollowModalOpen = (isFollowerModal: boolean) => {
    if (isFollowerModal) {
      setIsFollowerModal(true)
    } else {
      setIsFollowerModal(false)
    }
    handleModalOpen()
  }

  return (
    <>
      <div className="follow_info">
        <InfoCount
          text="팔로워"
          count={followerCount.toString()}
          onClick={() => followerCount && handleFollowModalOpen(true)}
        />
        <InfoCount
          text="팔로잉"
          count={followingCount.toString()}
          onClick={() => followingCount && handleFollowModalOpen(false)}
        />
      </div>
      <div className="follow_buttons">
        <FollowToggleButton userData={userData} size="large" />
      </div>
      <ModalProvider
        isOpen={isModalOpen}
        modalWidth={41}
        modalHeight={44}
        handleModalClose={handleModalClose}
      >
        <FollowList isFollowerList={isFollowerModal} userData={userData} />
      </ModalProvider>
    </>
  )
}

const InfoCount = ({
  text,
  count = '0',
  onClick,
}: {
  text: string
  count?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <>
      <button
        className="info_count"
        onClick={onClick}
        style={{ cursor: `${Number(count) === 0 ? 'auto' : 'pointer'}` }}
      >
        <Text textStyle="body1-bold">{text}</Text>
        <Text textStyle="body1-bold">{count}</Text>
      </button>
    </>
  )
}
