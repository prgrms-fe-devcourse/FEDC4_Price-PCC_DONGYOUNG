import React, { Dispatch, SetStateAction, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import { useDeletePost } from '@/queries/post'
import './index.scss'

type PropsType = {
  postId: string
  setIsDeleted?: Dispatch<SetStateAction<boolean>>
  size?: number
}

function PostOptionsDropdown({ postId, setIsDeleted, size = 1.5 }: PropsType) {
  const [isOpen, setIsOpen] = useState(false)
  const deletePostMutation = useDeletePost(postId)

  const handleDeletePost = () => {
    if (setIsDeleted) {
      setIsDeleted((prevState) => !prevState)
    }
    deletePostMutation.mutate()
  }
  return (
    <div className="dropdown-container">
      <button
        onClick={() => {
          setIsOpen((isOpen) => !isOpen)
        }}
        className="dropdown-container__button"
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
        }}
      >
        <Image src={Assets.OptionsIcon} alt="더보기 버튼" fill />
      </button>
      {isOpen && (
        <div
          className={classNames('dropdown-container__list', 'color-bg--bg-1', {
            close: !isOpen,
            options: true,
          })}
        >
          <OptimizedLink
            href={APP_PATH.postModify(postId)}
            className="dropdown-container__list--item"
          >
            <Text textStyle="body2-bold">게시글 수정</Text>
          </OptimizedLink>
          <div
            onClick={handleDeletePost}
            className="dropdown-container__list--item"
          >
            <Text textStyle="body2-bold">게시글 삭제</Text>
          </div>
        </div>
      )}
    </div>
  )
}

const OptimizedLink = React.memo(
  ({
    href,
    children,
    className,
  }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => (
    <Link href={href} className={className}>
      {children}
    </Link>
  ),
)
OptimizedLink.displayName = 'OptimizedLink'

export default React.memo(PostOptionsDropdown, (prevProps, nextProps) => {
  return prevProps.postId === nextProps.postId
})
