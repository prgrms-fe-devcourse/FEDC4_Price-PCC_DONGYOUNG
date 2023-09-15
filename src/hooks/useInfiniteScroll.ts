import { useRef, useEffect } from 'react'
import { InfiniteQueryObserverResult } from '@tanstack/react-query'
import Post from '@/types/post'

type UseInfiniteScroll = {
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<Post[], unknown>>
  hasNextPage: boolean | undefined
}

export const useInfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
}: UseInfiniteScroll) => {
  const observerElem = useRef(null)

  useEffect(() => {
    const element = observerElem.current
    const option = { threshold: 0.5 }

    const io = new IntersectionObserver((entries) => {
      const [target] = entries
      if (target.isIntersecting) {
        fetchNextPage()
      }
    }, option)

    if (hasNextPage && element) {
      io.observe(element)
      return () => io.unobserve(element)
    }
  }, [fetchNextPage, hasNextPage])

  return { observerElem }
}
