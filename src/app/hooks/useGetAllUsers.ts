
import { adminService } from '@/services/admin.service'
import { useQuery } from '@tanstack/react-query'

export function useGetAllUsers() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['users all'],
		queryFn: () => adminService.getAllUsers(),
	})

	return { data, isLoading, isSuccess }
}
