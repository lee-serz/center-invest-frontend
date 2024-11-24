import { categoriesService } from '@/services/categories.service'
import { useQuery } from '@tanstack/react-query'

export function useCategories() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['profile'],
		queryFn: () => categoriesService.getCategories()
	})

	return { data }
}
