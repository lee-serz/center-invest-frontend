import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { useProfile } from '@/app/hooks/useProfile'

export function useInitialData(reset: UseFormReset<TypeUserForm>) {
  const { user, isProfileQuerySuccess } = useProfile()

  useEffect(() => {
	if (isProfileQuerySuccess && user) {
	  const { email, name, breakInterval, intervalsCount, workInterval } = user;

	  reset({
        email: (user as any).user?.email || '',  // Игнорирование ошибок типов для email
        name: (user as any).user?.name || '',
		    token: (user as any).user?.token || '',
        breakInterval: typeof (user as any).user?.breakInterval === 'number' ? (user as any).user?.breakInterval : undefined,  // Игнорирование ошибок типов для breakInterval
        intervalsCount: typeof (user as any).user?.intervalsCount === 'number' ? (user as any).user?.intervalsCount : undefined,  // Игнорирование ошибок типов для intervalsCount
        workInterval: typeof (user as any).user?.workInterval === 'number' ? (user as any).user?.workInterval : undefined,  // Игнорирование ошибок типов для workInterval
      });
	}
  }, [isProfileQuerySuccess]);
}
