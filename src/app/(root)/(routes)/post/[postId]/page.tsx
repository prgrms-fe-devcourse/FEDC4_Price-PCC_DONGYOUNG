import { headers } from 'next/headers'
import DarkModeButton from '@/components/atoms/DarkModeButton'

export default async function Post() {
  const postHeaders = headers()
  const getPathName = postHeaders.get('x-invoke-path')?.replaceAll('/post/', '')

  return (
    <div>
      <DarkModeButton postId={getPathName || ''} />
    </div>
  )
}
