import { ForwardedRef, forwardRef } from 'react'
import UserDetailCard from '@/components/organisms/UserDetailCard'
import type Post from '@/types/post'
import CardGridTemplate from '../CardGridTemplate'
import './index.scss'

type UserDetailPageTemplateProps = {
  userPosts: Post[] | undefined
}

export default forwardRef(function UserDetailPageTemplate(
  { userPosts }: UserDetailPageTemplateProps,
  ref: ForwardedRef<null>,
) {
  return (
    <div className="user-detail">
      <UserDetailCard />
      <div className="grid">
        <CardGridTemplate postDatas={userPosts} ref={ref} />
      </div>
    </div>
  )
})
