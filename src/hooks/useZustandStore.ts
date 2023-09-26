import { useEffect, useState } from 'react'
import { StoreApi, UseBoundStore } from 'zustand'

export default function useZustandStore<T, V>(
  useStore: UseBoundStore<StoreApi<T>>,
  initalStore: T,
  selector: (_store: T) => V,
) {
  const [hydrated, setHydrated] = useState(false)
  const storeState = useStore(selector)

  useEffect(() => {
    setHydrated(true)
  }, [])
  return hydrated ? storeState : selector(initalStore)
}
