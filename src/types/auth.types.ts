import { UserRole } from "@/services/auth/auth.types"

export interface IAuthForm {
	email: string
	password: string
}

export interface IUser {
	id: number
	name?: string
	email: string
	avatarPath?: string
	rights: UserRole[]
	token: string
    statistics?: { label: string; value: string | number }[];
	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export interface IFormData extends Pick<IUser, 'email'> {
	password: string
}
  

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
