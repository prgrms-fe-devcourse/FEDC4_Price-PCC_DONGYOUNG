'use client'

import { forwardRef, ForwardedRef } from 'react'
import { CardPostItem } from '@/components/organisms/CardPostItem'
import { CardPostItemProps } from '@/components/organisms/CardPostItem/CardPostItem'
import Post from '@/types/post'
import './index.scss'

type CardGridTemplateProps = {
  postDatas: Post[] | undefined
}
export default forwardRef(function CardGridTemplate(
  { postDatas }: CardGridTemplateProps,
  ref: ForwardedRef<null>,
) {
  return (
    <div className="card-grid-container">
      {postDatas?.map(
        ({
          _id,
          likes,
          disLikes,
          image,
          author,
          title,
          description,
        }: CardPostItemProps) => (
          <CardPostItem
            likes={likes}
            disLikes={disLikes}
            key={_id}
            _id={_id}
            image={image}
            author={author}
            title={title}
            description={description}
          />
        ),
      )}
      <div id="observeTarget" ref={ref} />
    </div>
  )
})
