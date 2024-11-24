import cn from 'clsx';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { X } from 'lucide-react';
import { useState } from 'react';
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import './DatePicker.scss';
import { formatCaption } from './DatePickerCaption';
import { useOutside } from '@/app/hooks/useOutside';

dayjs.extend(LocalizedFormat);

interface IDatePicker {
  onChange: (value: string) => void;
  value: string;
  position?: 'left' | 'right';
}

export function DatePicker({
  onChange,
  value,
  position = 'right'
}: IDatePicker) {
  const [selected, setSelected] = useState<Date>();
  const [time, setTime] = useState<string>('00:00'); // Начальное время по умолчанию
  const { isShow, setIsShow, ref } = useOutside(false);

  const handleDaySelect: SelectSingleEventHandler = date => {
    const ISOdate = date?.toISOString();

    setSelected(date);
    if (ISOdate) {
      onChange(ISOdate);
      setIsShow(false);
    } else {
      onChange('');
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(':');
    if (Number(hours) >= 0 && Number(hours) < 24 && Number(minutes) >= 0 && Number(minutes) < 60) {
      setTime(e.target.value);
      const selectedDateTime = selected ? new Date(selected) : undefined;
      if (selectedDateTime) {
        selectedDateTime.setHours(parseInt(hours));
        selectedDateTime.setMinutes(parseInt(minutes));
        onChange(selectedDateTime.toISOString()); // Отправляем обновленную дату и время
      }
    }
  };

  return (
    <div
      className='relative'
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <button onClick={() => setIsShow(!isShow)}>
        {value ? dayjs(value).format('LL') : 'Click for select'}
      </button>
      {value && (
        <button
          className='absolute -top-2 -right-4 opacity-30 hover:opacity-100 transition-opacity'
          onClick={() => onChange('')}
        >
          <X size={14} />
        </button>
      )}
      {isShow && (
        <div
          className={cn(
            'absolute p-2.5 slide bg-background z-10 shadow rounded-lg',
            position === 'left' ? '-left-4' : ' -right-4'
          )}
          style={{
            top: 10
          }}
        >
          <DayPicker
            fromYear={2023}
            toYear={2054}
            initialFocus={isShow}
            mode='single'
            defaultMonth={selected}
            selected={selected}
            onSelect={handleDaySelect}
            weekStartsOn={1}
            formatters={{ formatCaption }}
          />
          {/* Поле для ввода времени */}
          {selected && (
            <div className="mt-4">
              <label htmlFor="time">Выберите время:</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={handleTimeChange}
                className="mt-1 p-2 bg-background text-text border border-gray-300 rounded"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
