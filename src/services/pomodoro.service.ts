import {
	IPomodoroSessionResponse,
	TypePomodoroRoundFormState,
	TypePomodoroSessionFormState
} from '@/types/pomodoro.types'

import { axiosClassic } from '@/api/axios'

class PomodoroService {
	private BASE_URL = '/user/timer'

	async getTodaySession() {
		const response = await axiosClassic.get<IPomodoroSessionResponse>(
			`${this.BASE_URL}/today`
		)
		return response
	}

	async createSession() {
		const response = await axiosClassic.post<IPomodoroSessionResponse>(
			this.BASE_URL
		)
		return response
	}

	async updateSession(id: string, data: TypePomodoroSessionFormState) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteSession(id: string) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}

	async updateRound(id: string, data: TypePomodoroRoundFormState) {
		const response = await axiosClassic.put(
			`${this.BASE_URL}/round/${id}`,
			data
		)
		return response
	}
}

export const pomodoroService = new PomodoroService()
