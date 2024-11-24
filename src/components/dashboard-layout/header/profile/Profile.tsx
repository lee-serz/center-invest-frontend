import { cookies } from 'next/headers'
import { EnumTokens } from '@/services/auth/auth.service'
import { API_URL } from '@/constants'
import { IAuthResponse } from '@/types/auth.types'

// ISR
const fetchProfile = async () => {
  'use server'

  const cookie = await cookies()
  const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value
	
  return fetch(`${API_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    next: { tags: ['profile'] }
  }).then(res => res.json()) as Promise<IAuthResponse>
}


export default async function Profile() {
	'use client'
  
	const userResponse: IAuthResponse = await fetchProfile()
  
	// Деструктурируем объект profile, извлекая user и другие возможные свойства
	const { user } = userResponse
  
	return (
		<div className='absolute right-8 top-big-layout right-big-layout'>
		<div className='flex items-center'>
		  <div className='text-right mr-3'>
			<p className='font-bold -mb-1'>{user?.name}</p> {/* Обращаемся к user, проверяя, что он существует */}
			<p className='text-sm opacity-40'>{user?.email}</p> {/* Тоже проверяем наличие user */}
		  </div>
	  
		  <div className='w-10 h-10 flex justify-center items-center text-2xl bg-foreground text-text rounded uppercase'>
			{user?.name?.charAt(0) || 'A'} {/* Используем имя из profile, если оно есть */}
		  </div>
		</div>
	  </div>
	  
	)
}
  
  