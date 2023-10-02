import React from 'react'
import ModifyPostPageTemplate from '@/components/templates/ModifyPostPageTemplate'
import { getPostDetail } from '@/services/post'
import Post from '@/types/post'

async function getPostData(postId: string): Promise<Post> {
  const res = await getPostDetail(postId)
  const { post, disLikePost } = res
  const { title, description } = await JSON.parse(post.title)
  post.title = title
  post.description = description
  post.mapping_ID = disLikePost._id
  return post
}

export default async function PostModifyPage({
  params: { postId },
}: {
  params: { postId: string }
}) {
  const postData = await getPostData(postId)

  return <ModifyPostPageTemplate postData={postData} />
}
