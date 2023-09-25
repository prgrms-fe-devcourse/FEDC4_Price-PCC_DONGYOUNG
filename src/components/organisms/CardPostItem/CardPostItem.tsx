import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import { LikeDislikeCount } from '@/components/molcules/LikeDislikeCount'
import PostOptionsDropdown from '@/components/molcules/PostOptionsDropdown'
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
    <>
      {!isDeleted && (
        <Card>
          <div className="content-container">
            <div className="content-container__header">
              <Link href={APP_PATH.userProfile(author._id)} prefetch={false}>
                <Avatar
                  text={author.fullName}
                  size={1.25}
                  src={author.image}
                  style={{
                    alignItems: 'flex-start',
                  }}
                />
              </Link>
              {isShowOptions && (
                <PostOptionsDropdown postId={_id} setIsDeleted={setIsDeleted} />
              )}
            </div>
            <Link
              href={APP_PATH.postDetail(_id)}
              className="content-container__article-container"
              prefetch={false}
            >
              <Text textStyle="body1-bold">{title}</Text>
              {image ? (
                <div className="content-container__image-container">
                  <Image src={image} alt="첨부 이미지" fill />
                </div>
              ) : (
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
              )}
            </Link>
            <LikeDislikeCount
              initalState="init"
              like={likes.length ?? 0}
              dislike={disLikes?.length ?? 0}
            />
          </div>
        </Card>
      )}
    </>
  )
}
