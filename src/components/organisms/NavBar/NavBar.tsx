import Link from 'next/link'
import ImageButton from '@/components/atoms/ImageButton'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import HydratedUserList from './UserList/HydratedUserList'
import './index.scss'

export default function NavBar() {
  return (
    <div className="nav-container color-bg--bg-1">
      <Link href={APP_PATH.home()}>
        <ImageButton src={Assets.MainLogo} shape="square" />
      </Link>
      <HydratedUserList />
    </div>
  )
}
