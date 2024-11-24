import dayjs from 'dayjs'
import { Formatters } from 'react-day-picker'

const seasonEmoji: Record<'winter' | 'spring' | 'summer' | 'autumn', string> = {
  winter: '⛄️',
  spring: '🌸',
  summer: '🌻',
  autumn: '🍂'
}

// Определяем сезон по месяцу
const getSeason = (month: Date): keyof typeof seasonEmoji => {
  const monthNumber = month.getMonth() + 1

  if (monthNumber >= 3 && monthNumber <= 5) return 'spring'
  if (monthNumber >= 6 && monthNumber <= 8) return 'summer'
  if (monthNumber >= 9 && monthNumber <= 11) return 'autumn'
  return 'winter'
}

export const formatCaption: Formatters['formatCaption'] = (month) => {
  const season = getSeason(month)

  // Возвращаем строку, которая будет использована в заголовке месяца
  return `${seasonEmoji[season]} ${dayjs(month).format('MMMM')}`
}
