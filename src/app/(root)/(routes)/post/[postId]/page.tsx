import { headers } from 'next/headers'
import { CommentList } from '@/components/organisms/CommentList'
import { fetchPostDetail } from '@/services/post'

export default async function Post() {
  const postHeaders = headers()
  const getPathName =
    postHeaders.get('x-invoke-path')?.replaceAll('/post/', '') || ''

  const initPost = await fetchPostDetail(getPathName)
  return (
    <div>
      <CommentList initComments={initPost.post.comments} postId={getPathName} />
    </div>
  )
}
