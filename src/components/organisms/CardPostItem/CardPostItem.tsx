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
          <Avatar size={1.5} src={author.image} style={{ marginRight: '5px' }}>
            <Text textStyle="body2" color="gray-5">
              {author.fullName}
            </Text>
          </Avatar>
        </Link>
        <Link href={APP_PATH.postDetail(_id)}>
          <Text textStyle="body1-bold" className="content-container__title">
            {title}
          </Text>
          {image ? (
            <div className="content-container__image-container">
              <Image src={image} alt="첨부 이미지" fill />
            </div>
          ) : (
            <div className="content-container__article-container">
              <Text
                textStyle="body2"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 7,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {description}
              </Text>
            </div>
          )}
        </Link>
        <LikeDislikeCount like={likes.length} dislike={disLikeCount} />
      </div>
    </Card>
  )
}
