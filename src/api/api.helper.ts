import { AxiosError } from 'axios'

export const getContentType = () => ({
  'Content-Type': 'application/json',
})

export const errorCatch = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const message = error?.response?.data?.message
    if (message) {
      return typeof message === 'object' ? message[0] : message
    }
    return error.message // На всякий случай если нет message в data
  }

  return 'An unknown error occurred'
}
