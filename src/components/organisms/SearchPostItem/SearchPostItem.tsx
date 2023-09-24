import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/atoms/Card'
import { Text } from '@/components/atoms/Text'
import { LikeDislikeCount } from '@/components/molcules/LikeDislikeCount'
import APP_PATH from '@/config/paths'
import Post from '@/types/post'
import htmlTagParser from '@/utils/htmlTagParser'
import './index.scss'

export type SearchPostItemProps = Pick<
  Post,
  '_id' | 'image' | 'title' | 'description' | 'disLikes' | 'likes'
>
export default function SearchPostItem({
  _id,
  image,
  title,
  description,
  disLikes,
  likes,
}: SearchPostItemProps) {
  return (
    <>
      <Card>
        <div className="content-container">
          <Link
            href={APP_PATH.postDetail(_id)}
            className="content-container__article-container"
          >
            <Text className="post-title" textStyle="body1-bold">
              {title}
            </Text>
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
            like={likes.length ?? 0}
            dislike={disLikes?.length ?? 0}
          />
        </div>
      </Card>
    </>
  )
}
