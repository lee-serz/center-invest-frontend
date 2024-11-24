import type { Metadata } from 'next'
import { GroupCreateForm } from './GroupCreateForm'

export const metadata: Metadata = {
	title: 'Administrator'
}

export default async function TutorPage() {
	return (
		<GroupCreateForm/>
	)
}
