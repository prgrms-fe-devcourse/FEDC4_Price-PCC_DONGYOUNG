import { useEffect, useState } from 'react'

type UseStorage<T> = {
  storageType: 'local' | 'session'
  key: string
  initialValue: T
}

const useStorage = <T>({
  storageType,
  key,
  initialValue,
}: UseStorage<T>): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState(initialValue)

  useEffect(() => {
    const storage = storageType === 'local' ? localStorage : sessionStorage
    const item = storage.getItem(key)
    if (item) {
      setStoredValue(parse(item))
    }
  }, [])

  useEffect(() => {
    const storage = storageType === 'local' ? localStorage : sessionStorage
    storage.setItem(key, JSON.stringify(storedValue))
  }, [storedValue])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

const parse = (storageValue: string) => {
  try {
    return JSON.parse(storageValue)
  } catch {
    return storageValue
  }
}

export default useStorage
