import { useState } from 'react'

type UseStorage<T> = {
  storageType: 'local' | 'session'
  key: string
  initialValue: T
}

const useStorage = <T>({
  storageType,
  key,
  initialValue,
}: UseStorage<T>): [T, (_value: T) => void] => {
  const storage = storageType === 'local' ? localStorage : sessionStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = storage.getItem(key)
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.error(error)
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
