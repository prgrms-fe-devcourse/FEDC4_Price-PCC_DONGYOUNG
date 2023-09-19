import UserDetailCard from '@/components/organisms/UserDetailCard'
import UserPostsGrid from '@/components/organisms/userPostsGrid'
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
        <UserPostsGrid userId={userId} />
      </div>
    </div>
  )
}
