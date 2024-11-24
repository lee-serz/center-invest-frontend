'use client';
import { Suspense } from 'react';
import Loader from '@/components/ui/Loader';
import { useProfile } from '../hooks/useProfile';

// Интерфейс для элемента статистики
interface Statistic {
  label: string;
  value: string | number;
}

export function Statistics() {
  return (
    <div className="statistics-container">
      <StatisticsContent />
    </div>
  );
}

function StatisticsContent() {
  const { user } = useProfile();

  // Проверяем, есть ли статистика и если да, вычисляем проценты
  let percentage = 0;

  if (user && user.statistics && user.statistics.length > 0) {
    const totalTasks = Number(user.statistics[0].value); // Общее количество задач
    const completedTasks = Number(user.statistics[1].value); // Количество выполненных задач

    // Рассчитываем процент выполнения
    percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  } else {
    console.log('Статистика задач не доступна или пустая');
  }

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <StatisticsWithData user={user} />
      </Suspense>

      <div className="mt-10">
        <div className="text-center mb-2">Процент выполнения задач: {percentage.toFixed(2)}%</div>
        <div className="w-full bg-foreground h-8 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function StatisticsWithData({ user }: { user: any }) {
  return (
    <div className='grid grid-cols-4 max-lg:grid-cols-2 gap-12 mt-7'>
      {user?.statistics && user.statistics.length ? (
        user.statistics.map((statistic: Statistic) => (
          <div
            className='bg-foreground py-10 rounded text-center'
            key={statistic.label}
          >
            <div className='text-xl max-lg:text-lg'>{statistic.label}</div>
            <div className='text-3xl max-lg:text-xl font-semibold'>{statistic.value}</div>
          </div>
        ))
      ) : (
        <div>Статистика не найдена</div>
      )}
    </div>
  );
}
