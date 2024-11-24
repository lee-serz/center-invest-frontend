import { instance } from '@/api/axios'
import { IAllGroup, IAllUsers } from '@/types/auth.types'
import { ICategoriesResponse, IChangeRole, TypeCategoriesFormState } from '@/types/categoies.types'




class TutorService {
	private BASE_URL = '/users'


    async getTutorGroup() {
		const response = await instance.get<IAllGroup[]>(`${this.BASE_URL}/group/all`)
		return response.data
	}
}

export const tutorService = new TutorService()
