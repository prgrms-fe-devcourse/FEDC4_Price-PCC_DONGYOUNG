import Avatar from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import './index.scss'

export default function UserDetailCard() {
  return (
    <Card className="user-detail_card">
      <Avatar size={10} />
      <Text textStyle="heading1-bold">이름</Text>
      <div className="follow_info">
        <InfoCount text="팔로워" number="40" />
        <InfoCount text="팔로잉" number="100" />
      </div>
      <div className="follow_buttons">
        <Button text="팔로우" variant="default" width={10} />
        <Button text="팔로잉" variant="default" width={10} />
      </div>
      <InfoCount text="게시글" number="132" />
    </Card>
  )
}

const InfoCount = ({ text, number }: { text: string; number: string }) => {
  return (
    <div className="info_count">
      <Text textStyle="body1-bold">{text}</Text>
      <Text textStyle="body1-bold">{number}</Text>
    </div>
  )
}
