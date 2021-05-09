import { useState } from 'react'

const useLocalStorage = (key: string, defaultValue: any) => {
  const [localStorageValue, setLocalStorageValue] = useState(
    JSON.parse(localStorage.getItem(key)) || defaultValue
  )
  const setItem = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
    setLocalStorageValue(value)
  }
  return [localStorageValue, setItem]
}

export default useLocalStorage
