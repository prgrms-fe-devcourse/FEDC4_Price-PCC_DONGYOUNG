import DarkModeButton from '@/components/atoms/DarkModeButton'
import NotificationButton from '@/components/atoms/NotificationButton'
import './index.scss'

export default function HeaderButtons() {
  return (
    <div className="button-container">
      <NotificationButton />
      <DarkModeButton />
    </div>
  )
}
