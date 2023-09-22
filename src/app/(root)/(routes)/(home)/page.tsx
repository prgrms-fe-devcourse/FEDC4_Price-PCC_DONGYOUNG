'use client'

import React, { useEffect, useState } from 'react'
import { notify } from '@/components/atoms/Toast'
import CardGridTemplate from '@/components/templates/CardGridTemplate'
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

    const loadInitDisLikePosts = async (postIds: string[]) => {
      const postAllRes = await Promise.all(
        postIds.map(async (id) => await fetchDisLikePost(id)),
      )

      if (data && data.pages) {
        const updatedPosts = [...data.pages].flat().map((post, i) => {
          return {
            ...post,
            disLikes: postAllRes[i].likes,
          }
        })
        setPosts(updatedPosts)
      }
    }

    const mappingIdList = data?.pages.flat().map((value) => value._id)
    if (mappingIdList) {
      loadInitDisLikePosts(mappingIdList)
    }
  }, [data, data?.pages])

  const { observerElem } = useInfiniteScroll({ fetchNextPage, hasNextPage })
  return <CardGridTemplate postDatas={posts} ref={observerElem} />
}
