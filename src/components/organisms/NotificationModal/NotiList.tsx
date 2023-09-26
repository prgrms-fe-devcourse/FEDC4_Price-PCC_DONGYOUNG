'use client'

import { useEffect, useState } from 'react'
import { UseQueryResult, useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import Loading from '@/components/atoms/Loading'
import { Text } from '@/components/atoms/Text'
import { notify } from '@/components/atoms/Toast'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import { NOTIFICATION_CONSTANT } from '@/constants/notification'
import useGetNotification from '@/queries/notifications'
import { putNotification } from '@/services/notification'
import Notification from '@/types/notification'
import User from '@/types/user'

export default function NotiList({
  currentUser,
}: {
  currentUser: User | undefined
}) {
  const [isUnseenDataExist, setIsUnseenDataExist] = useState(false)
  const { data, isLoading }: UseQueryResult<Notification[]> =
    useGetNotification({
      isLoggedIn: !!currentUser,
    })
  const filterData = data?.filter(
    ({ author, follow, comment }) =>
      author?._id !== currentUser?._id && follow !== null && comment !== null,
  )

  const { mutate, isError, isSuccess } = useMutation(putNotification)

  const handleClick = () => {
    mutate()

    if (isError) {
      notify('error', '알림을 삭제하는데 실패했습니다')
    }

    if (isSuccess) {
      setIsUnseenDataExist(false)
    }
  }

  useEffect(() => {
    if (filterData?.some(({ seen }) => !seen)) {
      setIsUnseenDataExist(true)
    }
    if (isSuccess) {
      setIsUnseenDataExist(false)
    }
  }, [filterData, isUnseenDataExist, isSuccess])

  if (isLoading) return <Loading size={2} />

  return (
    <>
      {isUnseenDataExist ? (
        filterData?.map(
          ({ seen, _id, follow, comment, author, post }) =>
            !seen && (
              <Link
                href={
                  follow
                    ? author
                      ? APP_PATH.userProfile(author?._id)
                      : APP_PATH.home()
                    : comment
                    ? post
                      ? APP_PATH.postDetail(post)
                      : APP_PATH.home()
                    : APP_PATH.home()
                }
                key={_id}
              >
                <Avatar
                  src={author?.image ?? Assets.PCCImage}
                  size={3}
                  text={author?.fullName}
                  subText={
                    follow
                      ? NOTIFICATION_CONSTANT.FOLLOW
                      : comment
                      ? NOTIFICATION_CONSTANT.COMMENT
                      : ''
                  }
                />
              </Link>
            ),
        )
      ) : (
        <EmptyNotification isLoggedIn={!!currentUser} />
      )}
      {isUnseenDataExist && (
        <div className="value-notification-list">
          <button className="seen-button" onClick={handleClick}>
            <Text
              className="seen-button-text"
              textStyle="body2-bold"
              color="primary-4"
            >
              모두 읽음
            </Text>
          </button>
        </div>
      )}
    </>
  )
}

const EmptyNotification = ({ isLoggedIn }: { isLoggedIn: Boolean }) => (
  <div>
    <Text textStyle="subtitle1-bold" color="primary-4">
      {isLoggedIn ? '알림이 없습니다' : '로그인이 필요합니다'}
    </Text>
  </div>
)
