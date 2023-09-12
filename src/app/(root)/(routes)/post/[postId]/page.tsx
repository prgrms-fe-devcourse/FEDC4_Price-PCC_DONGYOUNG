import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { CommentList } from '@/components/organisms/CommentList'
import { fetchPostDetail } from '@/services/post'

export default async function Post() {
  const postHeaders = headers()
  const getPathName =
    postHeaders.get('x-invoke-path')?.replaceAll('/post/', '') || ''

  const initPost = await fetchPostDetail(getPathName).catch(() => {
    redirect('/')
  })
  return (
    <div>
      <CommentList initComments={initPost} postId={getPathName} />
    </div>
  )
}
