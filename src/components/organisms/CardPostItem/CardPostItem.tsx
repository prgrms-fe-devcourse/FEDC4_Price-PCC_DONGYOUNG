import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import { LikeDislikeCount } from '@/components/molcules/LikeDislikeCount'
import APP_PATH from '@/config/paths'
import { getPostDetail } from '@/services/post'
import Post from '@/types/post'
import htmlTagParser from '@/utils/htmlTagParser'
import './index.scss'

export type CardPostItemProps = Pick<
  Post,
  '_id' | 'image' | 'author' | 'title' | 'description' | 'likes'
>

export default function CardPostItem({
  _id,
  likes,
  image,
  author,
  title,
  description,
}: CardPostItemProps) {
  const [disLikeCount, setDisLikeCount] = useState<number>(0)

  useEffect(() => {
    const fetchDisLikePost = async () => {
      const disLikeCount = await getPostDetail(_id)
      return disLikeCount
    }
    fetchDisLikePost().then(({ disLikePost }) =>
      setDisLikeCount(disLikePost.likes.length),
    )
  }, [_id, title])

  return (
    <Card>
      <div className="content-container">
        <Link href={APP_PATH.userProfile(author._id)}>
          <Avatar text={author.fullName} size={1.25} src={image} />
        </Link>
        <Link href={`/post/${_id}`}>
          <Text textStyle="body1-bold">{title}</Text>
        </Link>
        {image ? (
          <div className="content-container__image-container">
            <Image src={image} alt="첨부 이미지" fill />
          </div>
        ) : (
          <Link href={APP_PATH.userProfile(_id)}>
            <Text
              textStyle="body2"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 8,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {htmlTagParser(description)}
            </Text>
          </Link>
        )}
        <LikeDislikeCount like={likes.length} dislike={disLikeCount} />
      </div>
    </Card>
  )
}
