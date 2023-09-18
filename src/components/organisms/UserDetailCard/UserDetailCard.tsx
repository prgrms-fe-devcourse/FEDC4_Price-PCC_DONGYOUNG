import Avatar from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import { getUserDetail } from '@/services/user'
import User from '@/types/user'
import './index.scss'

async function getUserData(userId: string): Promise<User | undefined> {
  const res = await getUserDetail(userId)
  return res
}

export default async function UserDetailCard({ userId }: { userId: string }) {
  const userData = await getUserData(userId)

  return (
    <Card className="user-detail_card">
      <Avatar size={10} />
      <Text textStyle="heading1-bold">{userData?.fullName}</Text>
      <div className="follow_info">
        <InfoCount
          text="팔로워"
          number={userData?.followers?.length.toString()}
        />
        <InfoCount
          text="팔로잉"
          number={userData?.following?.length.toString()}
        />
      </div>
      <div className="follow_buttons">
        <Button text="팔로우" variant="default" width={10} />
        <Button text="팔로잉" variant="default" width={10} />
      </div>
      <InfoCount text="게시글" number={userData?.posts?.length.toString()} />
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
