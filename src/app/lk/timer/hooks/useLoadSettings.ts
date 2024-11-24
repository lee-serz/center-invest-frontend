import { useProfile } from '@/app/hooks/useProfile'

export function useLoadSettings() {
  const { user } = useProfile() // Получаем user, а не data

  // Если user существует, извлекаем workInterval и breakInterval, иначе задаем дефолтные значения
  const workInterval = user?.workInterval ?? 50
  const breakInterval = user?.breakInterval ?? 10

  return { workInterval, breakInterval }
}
