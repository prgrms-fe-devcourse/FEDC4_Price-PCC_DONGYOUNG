'use client'

import { useState } from 'react'
import { Text } from '@/components/atoms/Text'
import PostGrid from '@/components/organisms/PostGrid'
import UserGrid from '@/components/organisms/UserGrid'
import Post from '@/types/post'
import { UserSummary } from '@/types/user'
import './index.scss'

type dataType = {
  data: Post[] | UserSummary[]
}

export default function SearchPageTemplate({ data }: dataType) {
  const user: UserSummary[] = []
  const post: Post[] = []
  const [postClick, setPostClick] = useState(true)
  const [userClick, setUserClick] = useState(false)

  const handleClick = (category: string) => {
    if (category === 'post') {
      setPostClick(true)
      setUserClick(false)
    } else {
      setPostClick(false)
      setUserClick(true)
    }
  }

  const isUser = (target: UserSummary | Post): target is UserSummary => {
    return (target as UserSummary).fullName !== undefined
  }

  data?.forEach((value: UserSummary | Post) => {
    isUser(value) ? user.push(value) : post.push(value)
  })

  return (
    <div className="wrapper">
      <div className="container">
        <div className="search-page-headline color-bg--bg-2">
          <div className="button-container color-bg--bg-1">
            <CategoryButton
              title="게시글"
              count={post.length}
              isClick={postClick}
              onClick={() => handleClick('post')}
            />
            <CategoryButton
              title="사용자"
              count={user.length}
              isClick={userClick}
              onClick={() => handleClick('user')}
            />
          </div>
        </div>
        <div className="data-grid">
          {postClick ? (
            <PostGrid data={post}></PostGrid>
          ) : (
            <UserGrid data={user}></UserGrid>
          )}
        </div>
      </div>
    </div>
  )
}

const CategoryButton = ({
  title,
  count,
  isClick,
  onClick,
}: {
  title: string
  count: number
  isClick: boolean
  onClick: () => void
}) => (
  <button
    className={`category-button title-${title} click-${isClick}`}
    onClick={onClick}
  >
    <Text textStyle="subtitle1-bold" color="gray-2" className="category-text">
      {title}
    </Text>
    <Text textStyle="subtitle1-bold" color="gray-2" className="category-text">
      ({count})
    </Text>
  </button>
)
