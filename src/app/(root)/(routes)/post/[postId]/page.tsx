import { headers } from 'next/headers'
import DarkModeButton from '@/components/atoms/DarkModeButton'
import { getPostDetail } from '@/services/post'

export default async function Post() {
  const postHeaders = headers()
  const getPathName = postHeaders.get('x-invoke-path')?.replaceAll('/post/', '')
  const initPost = await getPostDetail(getPathName || '')

  console.log(initPost)
  return (
    <div>
      <DarkModeButton />
    </div>
  )
}
