import { instance } from '@/api/axios'
import { TypeUserForm } from '@/types/auth.types'
import { IUser } from '@/types/auth.types'


class UserService {
	private _BASE_URL = '/users/profile'

	async fetchProfile() {
		return instance.get<IUser>(`${this._BASE_URL}`)
	}

	async updateProfile(data: TypeUserForm) {
		return instance.put(`${this._BASE_URL}/update`, data)
	}
}

export default new UserService()
