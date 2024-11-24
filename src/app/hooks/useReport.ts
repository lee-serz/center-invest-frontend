import { useQuery } from '@tanstack/react-query'

// Функция для получения отчета через API Route
const fetchReport = async () => {
  const response = await fetch('/api/report')

  if (!response.ok) {
    throw new Error('Ошибка загрузки отчета')
  }

  return response.arrayBuffer() // Возвращаем данные как ArrayBuffer
}

export default function useReport() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['report'],
    queryFn: fetchReport,
    enabled: false, // Запрос не будет выполняться автоматически
  })

  const handleDownload = () => {
    if (data) {
      const blob = new Blob([data], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'report.pdf'
      link.click()
    }
  }

  return {
    data,
    error,
    isLoading,
    handleDownload,
    refetch, // Метод для ручного вызова запроса
  }
}
