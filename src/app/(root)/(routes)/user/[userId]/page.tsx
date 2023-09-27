import UserDetailPageTemplate from '@/components/templates/UserDetailPageTemplate'

export default function UserDetailPage({
  params: { userId },
}: {
  params: { userId: string }
}) {
  return <UserDetailPageTemplate userId={userId} />
}