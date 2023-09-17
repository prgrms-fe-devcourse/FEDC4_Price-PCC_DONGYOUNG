import UserDetailCard from '@/components/organisms/UserDetailCard'
import CardGridTemplate from '../CardGridTemplate'
import './index.scss'

export default function UserDetailPageTemplate() {
  return (
    <div className="user-detail">
      <UserDetailCard />
      <div className="grid">
        <CardGridTemplate postDatas={[]} />
      </div>
    </div>
  )
}
