import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import { LikeDislikeCount } from '@/components/molcules/LikeDislikeCount'
import Post from '@/types/post'
import './index.scss'

export type CardPostItemProps = Pick<Post, '_id' | 'image' | 'author' | 'title'>

export default function CardPostItem({
  _id,
  image,
  author,
  title,
}: CardPostItemProps) {
  return (
    <Card>
      <div className="content-container">
        <Link href={`/user/${author._id}`}>
          <Avatar text={author.fullName} size={1.25} src={image} />
        </Link>
        <Link href={`/post/${_id}`}>
          <Text textStyle="body1-bold">{JSON.parse(title).title}</Text>
        </Link>
        {image ? (
          <div className="content-container__image-container">
            <Image src={image} alt="첨부 이미지" fill />
          </div>
        ) : (
          <Link href={`/post/${_id}`}>
            <Text
              textStyle="body2"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 8,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {JSON.parse(title).body}
            </Text>
          </Link>
        )}
        <LikeDislikeCount like={230} dislike={170} />
      </div>
    </Card>
  )
}
