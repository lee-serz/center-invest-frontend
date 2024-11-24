'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import toast from 'react-hot-toast'

import { PUBLIC_PAGES } from '@/config/pages/public.config'
import authService from '@/services/auth/auth.service'

export function LogoutButton() {
  const { replace } = useRouter()
  const queryClient = useQueryClient()

  const [isPending, startTransition] = useTransition()

  const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess() {
      startTransition(() => {
        replace(PUBLIC_PAGES.LOGIN)  // Один вызов startTransition
      })
      // Очистка кеша
      queryClient.removeQueries({ queryKey: ['new tokens'], exact: true })
      queryClient.removeQueries({ queryKey: ['profile'], exact: true })
    },
    onError() {
      toast.error('При выходе произошла ошибка')
    }
  })

  const isLogoutLoading = isLogoutPending || isPending

  return (
    <div className="hover:opacity-80">
      <button 
        onClick={() => mutateLogout()} 
        disabled={isLogoutLoading}
        className="p-2"
      >
        <div className="mt-4 w-10 h-10 text-text">
          <LogOut />
        </div>
      </button>
    </div>
  )
}
