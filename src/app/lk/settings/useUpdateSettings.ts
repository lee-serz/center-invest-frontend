import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import userService from '@/services/user.service'
import axios from 'axios'
import actionProfile from '@/revalidate/profile'
import { useState } from 'react'
import { TypeUserForm } from '@/types/auth.types'

export function useUpdateSettings() {
  const queryClient = useQueryClient()
  const [isCooldown, setIsCooldown] = useState(false)

  const { mutate, isPending } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: TypeUserForm) => userService.updateProfile(data),

    onSuccess() {
      toast.success('Вы успешно обновили данные!')
      actionProfile()
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      setIsCooldown(true)

      setTimeout(() => {
        setIsCooldown(false)
      }, 60000)
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message)
      } else {
        toast.error('При обновлении данных возникли проблемы!')
      }
    }
  })

  return { mutate, isPending, isCooldown }
}
