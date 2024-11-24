'use server'

import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { UserRole } from '@/services/auth/auth.types'
import { getServerAuth } from '@/utils/server/get-server-auth'
import type { TUserDataState } from '@/utils/transform-user-to-state'
import { notFound, redirect } from 'next/navigation'

type RoleCheckFunction = (user: TUserDataState) => boolean

const roleChecks: Partial<Record<UserRole, RoleCheckFunction>> = {
	[UserRole.TUTOR]: (user: TUserDataState) => user.isTutor,
	[UserRole.ADMIN]: (user: TUserDataState) => user.isAdmin
}

type TRoles = UserRole[] | UserRole

export const protectPage = async (
	roles: TRoles = [UserRole.USER, UserRole.TUTOR, UserRole.ADMIN],
) => {
	const rolesArray = Array.isArray(roles) ? roles : [roles]

	const user = await getServerAuth()
	if (!user) {
		return rolesArray.includes(UserRole.TUTOR)
			? notFound()
			: redirect(PUBLIC_PAGES.LOGIN)
	}

	const hasValidRole = rolesArray.some(role => {
		const checkRole = roleChecks[role]
		return checkRole ? checkRole(user) : user.rights.includes(role)
	})

	if (!hasValidRole) {
		return notFound()
	}
}