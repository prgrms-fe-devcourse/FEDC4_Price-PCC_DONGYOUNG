import Assets from '@/config/assets'
import ImageButton from '../ImageButton'

export default function NotificationButton() {
  const handleNotification = () => {
    alert('알림 버튼이 클릭되었습니다.') // 추후 알림창 띄위기
  }

  return (
    <ImageButton
      size={3}
      src={Assets.NotificationImage}
      onClick={handleNotification}
    />
  )
}
