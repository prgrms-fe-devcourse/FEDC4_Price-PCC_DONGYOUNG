'use client'

import { CardPostItem } from '@/components/organisms/CardPostItem'
import { CardPostItemProps } from '@/components/organisms/CardPostItem/CardPostItem'
import Post from '@/types/post'
import './index.scss'

type PropsType = {
  data: Post[] | undefined
}
export default function PostGrid({ data }: PropsType) {
  return (
    <div className="card-grid-container">
      {data?.map(
        ({
          _id,
          image,
          author,
          title,
          description,
          likes,
        }: CardPostItemProps) => (
          <CardPostItem
            key={_id}
            _id={_id}
            image={image}
            author={author}
            title={title}
            likes={likes}
            description={description}
          />
        ),
      )}
    </div>
  )
}
