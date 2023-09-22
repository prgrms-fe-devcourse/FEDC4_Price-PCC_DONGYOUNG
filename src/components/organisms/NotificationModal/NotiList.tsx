import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import { NOTIFICATION_CONSTANT } from '@/constants/notification'
import useGetNotification from '@/queries/notifications'
import Comment from '@/types/comment'
import User from '@/types/user'

type NotificationProps = {
  seen: boolean
  _id: string
  user: User
  follow?: string
  comment?: Comment
}

export default function NotiList({
  currentUser,
  setIsOpen,
}: {
  currentUser: User | undefined
  open: boolean
  setIsOpen: (_value: boolean) => void
}) {
  const data = useGetNotification({ isLoggedIn: !!currentUser })
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <>
      {data.data?.map(
        ({ seen, _id, user, follow, comment }: NotificationProps) =>
          seen && (
            <Avatar
              key={_id}
              src={user.image ?? Assets.PCCImage}
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
      {data.data?.length ? (
        <div className="value-notification-list">
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
        <EmptyNotification isLoggedIn={!!currentUser} />
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
