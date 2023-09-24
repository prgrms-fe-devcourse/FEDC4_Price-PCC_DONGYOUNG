'use client'

import SearchPostItem from '@/components/organisms/SearchPostItem'
import { SearchPostItemProps } from '@/components/organisms/SearchPostItem/SearchPostItem'
import PostSummary from '@/types/post'
import './index.scss'

type PropsType = {
  data: PostSummary[] | undefined
}
export default function PostGrid({ data }: PropsType) {
  return (
    <div className="card-grid-container">
      {data?.map(
        ({ _id, image, title, description, likes }: SearchPostItemProps) => (
          <SearchPostItem
            key={_id}
            _id={_id}
            image={image}
            title={title}
            likes={likes}
            description={description}
          />
        ),
      )}
    </div>
  )
}
