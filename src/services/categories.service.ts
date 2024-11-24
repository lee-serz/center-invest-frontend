import { instance } from '@/api/axios'
import { ICategoriesResponse, TypeCategoriesFormState } from '@/types/categoies.types'
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'



class CategoriesService {
	private BASE_URL = '/users/categories'

	async getCategories() {
		const response = await instance.get<ICategoriesResponse[]>(this.BASE_URL)
		return response
	}

	async createCategories(data: TypeCategoriesFormState) {
		const response = await instance.post(`${this.BASE_URL}/add`, data)
		return response
	}

	async deleteCategories(id: string) {
		const response = await instance.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const categoriesService = new CategoriesService()
