import type { Metadata } from 'next'
import { AuthForm } from '../login/auth-form/AuthForm'

export const metadata: Metadata = {
	title: 'Register'
}

export default function RegisterPage() {
	return (
		<div className="max-h-screen flex items-center justify-center">
			<div className="rounded-lg shadow-md">
				<AuthForm isLogin={false} />
			</div>
		</div>
	)
}
