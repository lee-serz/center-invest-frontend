import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { adminService } from '@/services/admin.service'
import { IChangeRole } from '@/types/categoies.types'

export function useChangeRole() {
	const queryClient = useQueryClient()

	const { mutate: changeRole, isPending } = useMutation({
		mutationKey: ['change role'],
		mutationFn: ({ userId, data }: { userId: string; data: IChangeRole }) =>
			adminService.changeRole(data, userId),
		onSuccess() {
			toast.success('Права пользователя успешно обновлены!')
			queryClient.invalidateQueries({
				queryKey: ['users all']
			})
		},
		onError() {
			toast.error('Произошла ошибка при изменении прав пользователя.')
		},
	})

	return { changeRole, isPending }
}
