import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
  ref: React.RefObject<HTMLElement>
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialIsVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initialIsVisible)
  const ref = useRef<HTMLElement>(null)

  // Указываем тип события как MouseEvent
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsShow(false)
    }
  }                                                                                                                                                                                                                                                                       

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, []) // Зависимости для useEffect

  return { ref, isShow, setIsShow }
}
