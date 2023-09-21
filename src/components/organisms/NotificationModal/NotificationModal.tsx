import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import { NOTIFICATION_CONSTANT } from '@/constants/notification'
import useModal from '@/hooks/useModal'
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

export default function NotificationModal({ data }: PropsType) {
  const { handleModalClose } = useModal()

  const handleClick = () => {
    putNotification()
    handleModalClose()
  }

  return (
    <Card>
      <Text className="notification-title" textStyle="body1">
        알림
      </Text>
      {data?.map(
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
    </Card>
  )
}
