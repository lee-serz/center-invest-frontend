import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { useRouter } from 'next/navigation'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
	const router = useRouter()

	return (
		<div className="text-center text-base mt-3">
			{isLogin ? (
				<p>
					Нет аккаунта?{' '} <br />
					<button
						type="button"
						className="text-[#4EB34A] text-base"
						onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
					>
						Зарегистрироваться
					</button>
				</p>
			) : (
				<p>
					Уже есть аккаунт?{' '} <br />
					<button
						type="button"
						className="text-[#4EB34A] text-base"
						onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
					>
						Войти
					</button>
				</p>
			)}
		</div>
	)
}
