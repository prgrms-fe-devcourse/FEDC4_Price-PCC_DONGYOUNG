import classNames from 'classnames'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import User from '@/types/user'
import NotiList from './NotiList'
import './index.scss'

export default function NotificationModal({
  currentUser,
  open,
  setIsOpen,
}: {
  currentUser: User | undefined
  open: boolean
  setIsOpen: (_value: boolean) => void
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
        <NotiList open={open} setIsOpen={setIsOpen} currentUser={currentUser} />
      </Card>
    )
  )
}
