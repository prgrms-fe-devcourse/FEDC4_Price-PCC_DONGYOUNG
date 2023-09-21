import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import { NOTIFICATION_CONSTANT } from '@/constants/notification'
import { putNotification } from '@/services/notification'
import Comment from '@/types/comment'
import Notification from '@/types/notification'
import User from '@/types/user'
import './index.scss'

type PropsType = {
  data: Notification[] | undefined
}

type NotificationProps = {
  seen: boolean
  _id: string
  user: User
  follow?: string
  comment?: Comment
}

export default function NotificationModal({
  data,
  setIsOpen,
}: {
  data: PropsType
  setIsOpen: (_value: boolean) => void
}) {
  const handleClick = () => {
    putNotification()
    setIsOpen(false)
  }

  return (
    <Card className="notification-card">
      <Text className="notification-title" textStyle="body1">
        알림
      </Text>
      {data.data?.length ? (
        <div className="value-notification-list">
          {data.data?.map(
            ({ seen, _id, user, follow, comment }: NotificationProps) =>
              seen && (
                <Avatar
                  key={_id}
                  src={user.image || Assets.PCCImage}
                  size={3}
                  text={user.fullName}
                  subText={
                    follow
                      ? NOTIFICATION_CONSTANT.FOLLOW
                      : comment
                      ? NOTIFICATION_CONSTANT.COMMENT
                      : ''
                  }
                />
              ),
          )}
          <button className="seen-button" onClick={() => handleClick}>
            <Text
              className="seen-button-text"
              textStyle="body2-bold"
              color="primary-4"
            >
              모두 읽음
            </Text>
          </button>
        </div>
      ) : (
        <EmptyNotification />
      )}
    </Card>
  )
}

const EmptyNotification = () => (
  <div>
    <Text textStyle="subtitle1-bold" color="primary-4">
      알림이 없습니다
    </Text>
  </div>
)
