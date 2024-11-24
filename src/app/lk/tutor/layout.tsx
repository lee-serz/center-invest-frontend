import { UserRole } from '@/services/auth/auth.types'
import { protectPage } from '@/utils/server/protect-page'
import type { PropsWithChildren } from 'react'

export default async function TutorLayout({ children }: PropsWithChildren) {
	await protectPage(UserRole.TUTOR)

	return children
}
