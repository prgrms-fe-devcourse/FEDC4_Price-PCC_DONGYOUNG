import UserDetailCard from '@/components/organisms/UserDetailCard'
import HydratedPostGrid from '@/components/organisms/userPostsGrid/HydratedPostsGrid'
import './index.scss'

type UserDetailPageTemplateProps = {
  userId: string
}

export default function UserDetailPageTemplate({
  userId,
}: UserDetailPageTemplateProps) {
  return (
    <div className="user-detail">
      <UserDetailCard userId={userId} />
      <div className="grid">
        <HydratedPostGrid userId={userId} />
      </div>
    </div>
  )
}
