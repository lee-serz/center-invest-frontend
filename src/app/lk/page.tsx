'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'
import { Statistics } from './Statistics'
import useReport from '../hooks/useReport' // Импортируем хук

export default function DashboardPage() {
  const [isReportReady, setIsReportReady] = useState(false)

  // Используем хук для получения отчета
  const { data, error, isLoading, handleDownload, refetch } = useReport()

  const handleRequestReport = async () => {
    setIsReportReady(true)
    refetch() // Запуск запроса для получения отчета
  }

  return (
    <div className='mt-5'>
      <Heading title="Статистика" />
      

      <div className="grid grid-cols-2 gap-10">
        <Button onClick={handleRequestReport}>Запросить отчет</Button>

        {isLoading && <div>Загрузка...</div>}
        {error && <div>Ошибка загрузки отчета</div>}

        {data && !isLoading && !error && (
          <Button onClick={handleDownload}>Скачать отчет</Button>
        )}
      </div>

      <Statistics />
    </div>
  )
}
