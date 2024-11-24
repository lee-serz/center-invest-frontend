import { instance } from '@/api/axios'
import { IAllGroup, IAllUsers } from '@/types/auth.types'
import { ICategoriesResponse, IChangeRole, TypeCategoriesFormState } from '@/types/categoies.types'




class AdminService {
	private BASE_URL = '/users'

	async getAllUsers() {
		const response = await instance.get<IAllUsers[]>(`${this.BASE_URL}/all`)
		return response.data
	}

    async getAllGroup() {
		const response = await instance.get<IAllGroup[]>(`${this.BASE_URL}/group/all`)
		return response.data
	}

	// async createCategories(data: TypeCategoriesFormState) {
	// 	const response = await instance.post(`${this.BASE_URL}/add`, data)
	// 	return response
	// }

    async changeRole(data: IChangeRole, id: string) {
		const response = await instance.put(`${this.BASE_URL}/${id}/role`, data)
		return response
	}

	async deleteUser(id: string) {
		const response = await instance.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const adminService = new AdminService()
