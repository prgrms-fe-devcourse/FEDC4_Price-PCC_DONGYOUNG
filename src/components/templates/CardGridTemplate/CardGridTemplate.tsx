'use client'

import { forwardRef, ForwardedRef, useMemo } from 'react'
import { CardPostItem } from '@/components/organisms/CardPostItem'
import { CardPostItemProps } from '@/components/organisms/CardPostItem/CardPostItem'
import { useCurrentUser } from '@/hooks/useCurrentUser'
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
  const { currentUser } = useCurrentUser()
  const cachedCurrentUser = useMemo(() => currentUser, [currentUser])

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
            isShowOptions={
              isShowOptions ?? cachedCurrentUser?._id === author._id
            }
          />
        ),
      )}
      <div id="observeTarget" ref={ref} />
    </div>
  )
})
