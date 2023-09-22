import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import { LikeDislikeCount } from '@/components/molcules/LikeDislikeCount'
import APP_PATH from '@/config/paths'
import Post from '@/types/post'
import htmlTagParser from '@/utils/htmlTagParser'
import './index.scss'

export type CardPostItemProps = Pick<
  Post,
  '_id' | 'image' | 'author' | 'title' | 'description' | 'disLikes' | 'likes'
> & {
  isShowOptions?: boolean
}
export default function CardPostItem({
  _id,
  image,
  author,
  title,
  description,
  isShowOptions,
  disLikes,
  likes,
}: CardPostItemProps) {
  const [isDeleted, setIsDeleted] = useState(false)
  return (
    <Card>
      <div className="content-container">
        <Link
          href={APP_PATH.userProfile(author._id)}
          style={{ alignSelf: 'flex-start' }}
        >
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
                {htmlTagParser(description)}
              </Text>
            </div>
          )}
        </Link>
        <LikeDislikeCount
          like={likes.length ?? 0}
          dislike={disLikes?.length ?? 0}
        />
      </div>
    </Card>
  )
}
