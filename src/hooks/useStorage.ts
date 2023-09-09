import { useState } from 'react'

type UseStorage<T> = {
  storageType: 'local' | 'session'
  key: string
  initialValue: T
}

const useStorage = <T>({ storageType, key, initialValue }: UseStorage<T>) => {
  const storage = window[`${storageType}Storage`]
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      storage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

export default useStorage
