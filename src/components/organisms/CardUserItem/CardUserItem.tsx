import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import './index.scss'

export type CardUserPropsType = {
  _id: string
  image: string
  fullName: string
  followers: string[]
  following: string[]
}

export default function CardUserItem({
  _id,
  image,
  fullName,
  followers,
  following,
}: CardUserPropsType) {
  return (
    <Card>
      <Link href={APP_PATH.userProfile(_id)}>
        <div className="card-user-container">
          <Image
            width={100}
            height={100}
            src={image || Assets.PCCImage}
            alt="profile-image"
            style={{ borderRadius: '50%' }}
          />
          <Text textStyle="heading1-bold">{fullName}</Text>
          <div className="follow-container">
            <MultiText title="팔로워" count={followers}></MultiText>
            <MultiText title="팔로잉" count={following}></MultiText>
          </div>
        </div>
      </Link>
    </Card>
  )
}

const MultiText = ({ title, count }: { title: string; count: string[] }) => (
  <div className="follow-count-container">
    <Text textStyle="heading2">{title}</Text>
    <Text textStyle="heading2-bold">{count.length}</Text>
  </div>
)
