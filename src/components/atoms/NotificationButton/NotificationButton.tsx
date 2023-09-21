import NotificationModal from '@/components/organisms/NotificationModal'
import Assets from '@/config/assets'
import useModal from '@/hooks/useModal'
//import useGetNotification from '@/queries/notification'
import { Card } from '../Card'
import ImageButton from '../ImageButton'
import { Text } from '../Text'

export default function NotificationButton() {
  //const { data } = useGetNotification()
  const data = undefined
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal()

  const handleClick = () => {
    isModalOpen ? handleModalOpen() : handleModalClose()
  }

  return (
    <>
      <ImageButton
        size={3}
        src={Assets.NotificationImage}
        onClick={() => handleClick}
      />
      {isModalOpen &&
        (data ? <NotificationModal data={data} /> : <EmptyNotification />)}
    </>
  )
}

const EmptyNotification = () => (
  <Card>
    <button>
      <Text textStyle="body2-bold" color="primary-4">
        X
      </Text>
    </button>
    <Text textStyle="subtitle1-bold" color="primary-4">
      알림이 없습니다
    </Text>
  </Card>
)
