import { useMutation, useQueryClient } from '@tanstack/react-query'

import { adminService } from '@/services/admin.service'
import toast from 'react-hot-toast'

export function useDeleteUser() {
	const queryClient = useQueryClient()

	const { mutate: deleteUser, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete user'],
		mutationFn: (id: string) => adminService.deleteUser(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['users all']
			}),
				toast.success('Пользователь удален!')
		},
		onError: () => {
			toast.error('Ошибка при удалении пользователя')
		}
	})

	return { deleteUser, isDeletePending }
}
