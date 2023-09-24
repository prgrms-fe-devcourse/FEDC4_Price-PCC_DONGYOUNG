'use client'

import { useEffect, useState } from 'react'
import { UseQueryResult, useMutation } from '@tanstack/react-query'
import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import { notify } from '@/components/atoms/Toast'
import Assets from '@/config/assets'
import { NOTIFICATION_CONSTANT } from '@/constants/notification'
import useGetNotification from '@/queries/notifications'
import { putNotification } from '@/services/notification'
import Notification from '@/types/notification'
import User from '@/types/user'

export default function NotiList({
  currentUser,
}: {
  currentUser: User | undefined
  open: boolean
}) {
  const [isUnseenDataExist, setIsUnseenDataExist] = useState(false)
  const data: UseQueryResult<Notification[]> = useGetNotification({
    isLoggedIn: !!currentUser,
  })
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
    if (data.data?.some(({ seen }) => !seen)) {
      setIsUnseenDataExist(true)
    }
    if (isSuccess) {
      setIsUnseenDataExist(false)
    }
  }, [data, isUnseenDataExist, isSuccess])

  return (
    <>
      {isUnseenDataExist ? (
        data.data?.map(
          ({ seen, _id, follow, comment, author }) =>
            !seen && (
              <Avatar
                key={_id}
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
