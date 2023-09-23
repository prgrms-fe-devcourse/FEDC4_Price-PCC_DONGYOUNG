import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import { Environment } from '@/config/environments'
import { getUserDetail } from '@/services/user'
import User from '@/types/user'
import './index.scss'
import Follows from './section/Follows'

async function getUserData(userId: string): Promise<User> {
  const res = await getUserDetail(userId)
  return res
}

export default async function UserDetailCard({ userId }: { userId: string }) {
  const userData = await getUserData(userId)
  const userCurChannelPostLength = userData?.posts?.filter(
    (post) => String(post.channel) === Environment.channelId(),
  ).length
  return (
    <Card className="user-detail_card">
      <Avatar size={10} />
      <Text textStyle="heading1-bold">{userData?.fullName}</Text>
      <Follows userData={userData} />
      <InfoCount text="게시글" number={userCurChannelPostLength?.toString()} />
    </Card>
  )
}

const InfoCount = ({
  text,
  number = '0',
}: {
  text: string
  number?: string
}) => {
  return (
    <div className="info_count">
      <Text textStyle="body1-bold">{text}</Text>
      <Text textStyle="body1-bold">{number}</Text>
    </div>
  )
}
