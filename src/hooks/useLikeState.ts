import { useEffect, useState } from 'react'

export default function useLikeState(
  initState: 'init' | 'like' | 'dislike' | 'both',
) {
  const [likeState, setLikeState] = useState('init')
  useEffect(() => {
    setLikeState(initState)
  }, [initState])

  const toggleLikeState = () => {
    if (likeState === 'like') {
      setLikeState('init')
    } else {
      setLikeState('like')
    }
  }

  const toggleDisLikeState = () => {
    if (likeState === 'dislike') {
      setLikeState('init')
    } else {
      setLikeState('dislike')
    }
  }

  return { likeState, toggleLikeState, toggleDisLikeState }
}
