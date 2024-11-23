import { axiosClassic } from '@/api/axios'
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'



class TaskService {
	private BASE_URL = '/user/tasks'

	async getTasks() {
		const response = await axiosClassic.get<ITaskResponse[]>(this.BASE_URL)
		return response
	}

	async createTask(data: TypeTaskFormState) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTask(id: string) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const taskService = new TaskService()
