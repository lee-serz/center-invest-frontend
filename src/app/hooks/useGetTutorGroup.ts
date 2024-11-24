
import { adminService } from '@/services/admin.service'
import { tutorService } from '@/services/tutor.service'
import { useQuery } from '@tanstack/react-query'

export function useGetAllGroup() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['group tutor'],
		queryFn: () => tutorService.getTutorGroup(),
	})

	return { data, isLoading, isSuccess }
}
