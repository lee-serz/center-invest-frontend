
import { adminService } from '@/services/admin.service'
import { useQuery } from '@tanstack/react-query'

export function useGetAllGroup() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['group all'],
		queryFn: () => adminService.getAllGroup(),
	})

	return { data, isLoading, isSuccess }
}
