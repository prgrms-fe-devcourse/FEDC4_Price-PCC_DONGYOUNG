'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CirclePlusButton from '@/components/atoms/CirclePlusButton'
import { notify } from '@/components/atoms/Toast'
import CardGridTemplate from '@/components/templates/CardGridTemplate'
import APP_PATH from '@/config/paths'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useGetAllPosts from '@/queries/channel'
import { getPostDetail } from '@/services/post'
import Post from '@/types/post'

export default function Home() {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchDisLikePost = async (postId: string) => {
      try {
        const data = await getPostDetail(postId)
        return data.disLikePost
      } catch (e) {
        notify('error', '서버호출 시 문제가 발생했습니다.')
      }
    }

    const loadInitDisLikePosts = async (posts: Post[]) => {
      const mappingIdList = posts?.map((value) => value._id)

      const postAllRes = await Promise.all(
        mappingIdList?.map(async (id) => await fetchDisLikePost(id)),
      )
      const updatedPosts = posts.map((post, i) => {
        return {
          ...post,
          disLikes: postAllRes[i]?.likes,
        }
      })

      setPosts(updatedPosts)
    }

    loadInitDisLikePosts(data?.pages.flat() as Post[])
  }, [data])

  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })
  const router = useRouter()

  return (
    <>
      <CardGridTemplate
        postDatas={posts}
        ref={observerElem}
        isShowOptions={false}
      />
      <CirclePlusButton onClick={() => router.push(APP_PATH.postNew())} />
    </>
  )
}
