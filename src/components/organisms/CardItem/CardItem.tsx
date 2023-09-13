import Image from 'next/image'
import Avatar from '@/components/atoms/Avatar'
import { Card } from '@/components/atoms/Card'
import { LikeDislikeCount } from '@/components/molcules/\bLikeDislikeCount'
import { Text } from '@/components/text'
import './index.scss'

const DUMMY = {
  _id: 0,
  image: 'https://picsum.photos/200/300',
  author: '이민희',
  title: {
    title: '제목',
    body: '글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?글 내용입니다. 포스트 api는 글 내용을 필드로 안 담고 있네요..?',
  },
}
export default function CardItem() {
  const {
    _id,
    image,
    author,
    title: { title, body },
  } = DUMMY
  return (
    <Card width={22} height={20.25}>
      <div className="content-container">
        <Avatar text={author} size={1.25} src={image} />
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
              WebkitLineClamp: 8,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {body}
          </Text>
        )}
        <LikeDislikeCount like={230} dislike={170} />
      </div>
    </Card>
  )
}
