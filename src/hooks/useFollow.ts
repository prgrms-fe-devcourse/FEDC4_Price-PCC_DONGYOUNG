'use client'

import { useEffect, useState } from 'react'
import { deleteFollow, postFollow } from '@/services/follow'
import User from '@/types/user'
import { useCurrentUser } from './useCurrentUser'

//FIXME: 정리되지 않은 코드입니다. 정리 후 사용해주세요.
/**
 *
 * @returns param isFollowing: 로그인한 유저가 현재 페이지의 유저를 팔로우하고 있는지 여부
 * @returns param isFollowed: 현재 페이지의 유저가 로그인한 유저를 팔로우하고 있는지 여부
 * @returns param unavailable: 팔로우, 팔로잉 기능을 사용할 수 없는 경우
 * @returns param followToggle: 팔로우, 팔로잉 기능을 토글하는 함수
 * @returns param followerCount: 현재 페이지의 유저의 팔로워 수
 * @returns param followingCount: 현재 페이지의 유저의 팔로잉 수
 */
const useFollow = (userData: User) => {
  const { currentUser } = useCurrentUser()

  const [isFollowing, setIsFollowing] = useState(false)
  const [isFollowed, setIsFollowed] = useState(false)
  const [followId, setFollowId] = useState('')
  const [followerCount, setFollowerCount] = useState(0)
  const [followingCount, setFollowingCount] = useState(0)

  console.log('userData', userData)
  useEffect(() => {
    if (!currentUser) return
    setFollowerCount(() => userData.followers?.length ?? 0)
    setFollowingCount(() => userData.following?.length ?? 0)
    setIsFollowing(() => userData.followers?.includes(currentUser._id) ?? false)
    setIsFollowed(() => currentUser?.followers?.includes(userData._id) ?? false)
  }, [
    currentUser,
    userData._id,
    userData.followers,
    userData.following?.length,
  ])

  const followToggle = async () => {
    if (!currentUser) return
    if (isFollowing) {
      const followedUserId = currentUser.following?.find(
        (_id) => _id === userData._id,
      )

      setFollowId(() => followedUserId ?? '')
      setIsFollowing(false)
      setFollowerCount((prev) => prev - 1)
      await deleteFollow(followedUserId ?? followId)
    } else {
      setIsFollowing(true)
      setFollowerCount((prev) => prev + 1)
      const followData = await postFollow(userData._id)
      setFollowId(() => followData.user ?? '')
    }
  }

  return {
    isFollowing,
    isFollowed,
    followerCount,
    followingCount,
    unavailable: !currentUser || currentUser._id === userData._id,
    followToggle,
  }
}

export default useFollow
