'use client'

import { useState } from 'react'
import FollowToggleButton from '@/components/atoms/FollowToggleButton'
import { Text } from '@/components/atoms/Text'
import ModalProvider from '@/components/molcules/ModalLayout'
import useFollow from '@/hooks/useFollow'
import useModal from '@/hooks/useModal'
import User from '@/types/user'
import FollowList from '../../FollowList/FollowList'

export default function Follows({ userData }: { userData: User }) {
  const {
    unavailable,
    isFollowing,
    followerCount,
    followingCount,
    followToggle,
    updatedUserData,
  } = useFollow(userData)

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
          onClick={() => handleFollowModalOpen(true)}
        />
        <InfoCount
          text="팔로잉"
          count={followingCount.toString()}
          onClick={() => handleFollowModalOpen(false)}
        />
      </div>
      <div className="follow_buttons">
        <FollowToggleButton
          size="large"
          followToggle={followToggle}
          unavailable={unavailable}
          isFollowing={isFollowing}
        />
      </div>
      <ModalProvider
        isOpen={isModalOpen}
        modalWidth={41}
        modalHeight={44}
        handleModalClose={handleModalClose}
      >
        {isModalOpen && (
          <FollowList
            isFollowerList={isFollowerModal}
            userData={updatedUserData}
          />
        )}
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
      <button className="info_count--follow" onClick={onClick}>
        <Text textStyle="body1" color="primary-4">
          {text}
        </Text>
        <Text textStyle="body1-bold" color="primary-4">
          {count}
        </Text>
      </button>
    </>
  )
}
