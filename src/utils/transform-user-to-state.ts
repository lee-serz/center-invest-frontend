import { type TProtectUserData, UserRole } from '@/services/auth/auth.types'

export type TUserDataState = {
	id: number
	rights: UserRole[]
	isLoggedIn: boolean
	isTutor: boolean
	isAdmin: boolean

}

export const transformUserToState = (
	user: TProtectUserData
): TUserDataState | null => {
	return {
		...user,
		isLoggedIn: true,
		isTutor: user.rights?.includes(UserRole.TUTOR),
		isAdmin: user.rights?.includes(UserRole.ADMIN),
	}
}