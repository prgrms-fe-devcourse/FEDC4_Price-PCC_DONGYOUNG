'use client'

import React, { Suspense, lazy, useState } from 'react'
import FollowToggleButton from '@/components/atoms/FollowToggleButton'
import Loading from '@/components/atoms/Loading'
import { Text } from '@/components/atoms/Text'
import ModalProvider from '@/components/molcules/ModalLayout'
import useFollow from '@/hooks/useFollow'
import useModal from '@/hooks/useModal'
import User from '@/types/user'

const LazyFollowList = lazy(() => import('@/components/organisms/FollowList'))
export default function Follows({ userData }: { userData: User }) {
  const {
    unavailable,
    isFollowing,
    followerCount,
    followingCount,
    followToggle,
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
          <Suspense fallback={<Loading size={5} />}>
            <LazyFollowList
              isFollowerList={isFollowerModal}
              userData={userData}
            />
          </Suspense>
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
      <button className="info_count" onClick={onClick}>
        <Text textStyle="body1-bold">{text}</Text>
        <Text textStyle="body1-bold">{count}</Text>
      </button>
    </>
  )
}
