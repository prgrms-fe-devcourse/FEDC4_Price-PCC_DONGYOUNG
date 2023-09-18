import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostDetailTemplate } from '@/components/templates/PostDetailTemplate/PostDetailTemplate'
import { getPostDetail } from '@/services/post'

export default async function Post() {
  const postHeaders = headers()
  const getPathName =
    postHeaders.get('x-invoke-path')?.replaceAll('/post/', '') || ''

  const initPost = await getPostDetail(getPathName).catch(() => {
    redirect('/')
  })

  return (
    <PostDetailTemplate
      disLikeChannelPost={initPost.disLikePost}
      initPost={initPost.post}
      postId={getPathName}
    ></PostDetailTemplate>
  )
}
