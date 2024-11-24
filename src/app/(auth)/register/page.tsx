import type { Metadata } from 'next'
import { AuthForm } from '../login/auth-form/AuthForm'

export const metadata: Metadata = {
	title: 'Register'
}

export default function RegisterPage() {
	return (
		<div className="h-full flex items-center justify-center">
			<AuthForm isLogin={false} />
		</div>
	)
}
