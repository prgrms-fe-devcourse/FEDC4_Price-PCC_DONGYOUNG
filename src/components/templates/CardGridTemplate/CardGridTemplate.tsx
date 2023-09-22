'use client'

import { forwardRef, ForwardedRef, useMemo } from 'react'
import { CardPostItem } from '@/components/organisms/CardPostItem'
import { CardPostItemProps } from '@/components/organisms/CardPostItem/CardPostItem'
import { useAuth } from '@/lib/contexts/authProvider'
import Post from '@/types/post'
import './index.scss'

type CardGridTemplateProps = {
  postDatas: Post[] | undefined
  isShowOptions?: boolean
}
export default forwardRef(function CardGridTemplate(
  { postDatas, isShowOptions }: CardGridTemplateProps,
  ref: ForwardedRef<null>,
) {
  const { currentUser } = useAuth()
  const cachedCurrentUser = useMemo(() => currentUser, [currentUser])
  return (
    <div className="card-grid-container">
      {postDatas?.map(
        (
          { _id, image, author, title, description, likes }: CardPostItemProps,
          index,
        ) => {
          return (
            <CardPostItem
              key={_id + index}
              _id={_id}
              image={image}
              author={author}
              title={title}
              description={description}
              likes={likes}
              isShowOptions={
                isShowOptions ?? cachedCurrentUser?._id === author._id
              }
            />
          )
        },
      )}
      <div id="observeTarget" ref={ref} />
    </div>
  )
})
