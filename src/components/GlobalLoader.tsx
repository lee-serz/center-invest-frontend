'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export function GlobalLoader() {
  const isMutating = useIsMutating()
  const isFetching = useIsFetching()

  useEffect(() => {
    if (isFetching || isMutating) {
      const toastId = toast.loading('Технические неполадки', {
        position: 'top-center',
        duration: 0,
      })

      return () => {
        toast.remove(toastId)
      }
    }
  }, [isFetching, isMutating])

  return null
}
