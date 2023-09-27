'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/contexts/authProvider'
import { deleteFollow, postFollow } from '@/services/follow'
import User, { UserSummary } from '@/types/user'

/**
 *
 * @returns param isFollowing: 로그인한 유저가 현재 페이지의 유저를 팔로우하고 있는지 여부
 * @returns param isFollowed: 현재 페이지의 유저가 로그인한 유저를 팔로우하고 있는지 여부
 * @returns param unavailable: 팔로우, 팔로잉 기능을 사용할 수 없는 경우
 * @returns param followToggle: 팔로우, 팔로잉 기능을 토글하는 함수
 * @returns param followerCount: 현재 페이지의 유저의 팔로워 수
 * @returns param followingCount: 현재 페이지의 유저의 팔로잉 수
 */

const useFollow = (userData: User | UserSummary | undefined) => {
  const { currentUser } = useAuth()

  const [isFollowing, setIsFollowing] = useState(false)
  const [isFollowed, setIsFollowed] = useState(false)
  const [followId, setFollowId] = useState('')
  const [followerCount, setFollowerCount] = useState(0)
  const [followingCount, setFollowingCount] = useState(0)
  const [updatedUserData, setUpdatedUserData] = useState(() => {
    if (!userData) return undefined
    return { ...userData }
  })

  useEffect(() => {
    if (!userData) return
    setFollowerCount(() => userData.followers?.length ?? 0)
    setFollowingCount(() => userData.following?.length ?? 0)
    if (!currentUser) return
    setIsFollowing(
      () =>
        currentUser.following?.some(
          (followedUser) => followedUser.user === userData?._id,
        ) ?? false,
    )
    setIsFollowed(
      () =>
        currentUser?.followers?.some(
          (follower) => userData._id === follower._id,
        ) ?? false,
    )
    setUpdatedUserData(() => ({ ...userData }))
  }, [currentUser, userData])

  const followToggle = async () => {
    if (!userData || !updatedUserData) return
    if (isFollowing) {
      setFollowerCount((prev) => prev - 1)
      setIsFollowing(false)

      if (!currentUser) return
      setUpdatedUserData((prevUserData) => {
        const user = prevUserData as User
        return {
          ...user,
          followers: user.followers?.filter(
            ({ follower }) => follower !== currentUser._id,
          ),
        }
      })
      const followData = currentUser.following?.find(
        ({ user }) => user === userData._id,
      )
      await deleteFollow(followData?._id ?? followId)
      setFollowId(() => followData?._id ?? '')
      currentUser.following?.splice(
        currentUser.following.findIndex(({ user }) => user === userData._id),
        1,
      )
    } else {
      setIsFollowing(true)
      setFollowerCount((prev) => prev + 1)

      if (!currentUser) return
      const followData = await postFollow(userData._id)
      setUpdatedUserData((prevUserData) => {
        const user = prevUserData as User
        return {
          ...user,
          followers: [...user.followers!, followData],
        }
      })
      setFollowId(() => followData._id ?? '')
      currentUser.following?.push(followData)
    }
  }

  return {
    isFollowing,
    isFollowed,
    followerCount,
    followingCount,
    unavailable: !currentUser || currentUser._id === userData?._id,
    followToggle,
    updatedUserData: updatedUserData as User,
  }
}

export default useFollow
