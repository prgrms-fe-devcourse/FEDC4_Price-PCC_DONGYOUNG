import classNames from 'classnames'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import User from '@/types/user'
import NotiList from './NotiList'
import './index.scss'

export default function NotificationModal({
  currentUser,
  open,
}: {
  currentUser: User | undefined
  open: boolean
}) {
  return (
    open && (
      <Card
        className={classNames('notification-card', {
          'notification-card--open': open,
        })}
      >
        <Text className="notification-title" textStyle="body1">
          알림
        </Text>
        <div className="notification-avatar-list">
          <NotiList open={open} currentUser={currentUser} />
        </div>
      </Card>
    )
  )
}
