'use client'

import { forwardRef, ForwardedRef, useMemo } from 'react'
import { CardPostItem } from '@/components/organisms/CardPostItem'
import { CardPostItemProps } from '@/components/organisms/CardPostItem/CardPostItem'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import Post from '@/types/post'
import './index.scss'

type CardGridTemplateProps = {
  postDatas: Post[] | undefined
}
export default forwardRef(function CardGridTemplate(
  { postDatas }: CardGridTemplateProps,
  ref: ForwardedRef<null>,
) {
  const { currentUser } = useCurrentUser()
  const cachedCurrentUser = useMemo(() => currentUser, [currentUser])

  return (
    <div className="card-grid-container">
      {postDatas?.map(
        (
          { _id, image, author, title, description }: CardPostItemProps,
          index,
        ) => {
          const isEqualUser = cachedCurrentUser?._id === author._id
          return (
            <CardPostItem
              key={_id + index}
              _id={_id}
              image={image}
              author={author}
              title={title}
              description={description}
              isEqualUser={isEqualUser}
            />
          )
        },
      )}
      <div id="observeTarget" ref={ref} />
    </div>
  )
})
