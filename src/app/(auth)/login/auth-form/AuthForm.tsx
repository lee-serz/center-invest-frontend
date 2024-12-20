'use client'

import clsx from 'clsx'
import styles from './AuthForm.module.scss'
import { AuthToggle } from './AuthToggle'
import { SocialMediaButtons } from './SocialMediaButtons'
import { useAuthForm } from './useAuthForm'
import { ErrorMessage } from '@/errors/errorMessage'
import Image from 'next/image'

interface AuthFormProps {
	isLogin: boolean
}

export function AuthForm({ isLogin }: AuthFormProps) {
	const { handleSubmit, isLoading, onSubmit, register, formState } =  useAuthForm(isLogin)
	
	const passwordError = formState.errors['password']?.message
	const emailError = formState.errors['email']?.message

	return (
		<div className="flex justify-around items-center h-full gap-5">
			<form
			onSubmit={handleSubmit(onSubmit)}	
			className="flex flex-col justify-between max-h-full grow"
		>
			
			<div className="mb-4">
				<SocialMediaButtons />
			</div>
			<p className='text-center uppercase mt-5 mb-5'>Или</p>

			<div className="mb-4 input-">
				<label className="text-gray-600">
					<input
						type="email"
						placeholder="ПОЧТА"
						{...register('email', { required: "Обязательно для заполнения", pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Не существующая почта"}
						})}
						className={clsx(
							styles['input-field']
						)}
					/>
				</label>
				<ErrorMessage message={emailError} />
			</div>

			<div className="mb-4">
				<label className="text-gray-600">
					
					<input
						type="password"
						placeholder="ПАРОЛЬ"
						{...register('password', { required: "Обязательно для заполнения", minLength: {
							value: 6,
							message: "Пароль не менее 6 символов"} 
						})}
						className={clsx(
							styles['input-field']							
						)}
					/>
				</label>
				<ErrorMessage message={passwordError} />
			</div>

			<div className="mb-2">
				<button
					type="submit"
					className={clsx(
						styles['btn-primary'],
						isLogin ? 'bg-[#4EB34A]' : 'bg-[#4EB34A]',
						isLoading ? 'opacity-75 cursor-not-allowed' : ''
					)}
					disabled={isLoading}
				>
					{isLoading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
				</button>
			</div>

			<AuthToggle isLogin={isLogin} />

			</form>
			<div className="max-lg:hidden w-1/2 flex flex-col h-full">
				<div className="bg-background">
				<Image 
					className='w-[663px] object-cover' 
					src="/auth-image.svg" 
					alt="Auth image" 
					width={663} 
					height={200 }
				/>
					
				</div>
				<div className="bg-[#4EB34A] grow font-bold text-white text-[2rem] text-center pt-4">
					Управляй временем вместе с Центр-Инвест
				</div>
			</div>
		</div>
	
	)
}
