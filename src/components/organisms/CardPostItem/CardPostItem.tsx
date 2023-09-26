import { useEffect, useState } from 'react'
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
  const [parsedDescription, setParsedDescription] = useState('')

  useEffect(() => {
    setParsedDescription(htmlTagParser(description))
  }, [description])

  return (
    <>
      {!isDeleted && (
        <Card>
          <div className="content-container">
            <div className="content-container__header">
              <div className="content-container__header--title">
                <Link href={APP_PATH.userProfile(author._id)}>
                  <Avatar
                    text={author.fullName}
                    size={1.25}
                    src={author.image}
                    style={{
                      alignItems: 'flex-start',
                    }}
                  />
                </Link>
              </div>
              {isShowOptions && (
                <PostOptionsDropdown postId={_id} setIsDeleted={setIsDeleted} />
              )}
            </div>
            <Link
              href={APP_PATH.postDetail(_id)}
              className="content-container__article-container"
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
                  {parsedDescription}
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
