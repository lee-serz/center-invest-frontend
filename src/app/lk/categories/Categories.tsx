'use client';

import Loader from '@/components/ui/Loader'
import { useCategoriesForm } from './hooks/useCategoriesForm';

export function Categories() {
    const { handleSubmit, isPending, onSubmit, register } = useCategoriesForm();
  
    return (
      <div className='mb-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="">
              <label className="">
                <input
                className='h-full min-w-[300px] max-w-[500px] mb-2 flex w-full bg-foreground items-center justify-center rounded-lg  p-3 text-base outline-none placeholder:text-text placeholder:font-normal duration-500 transition-colors focus:border-primary'
                  type="text"
                  placeholder="Введите название категории"
                  {...register('name', { required: "Обязательно для заполнения" })}
                />
              </label>
            </div>
            <div className="">
              <button className='h-full rounded-lg bg-foreground py-2 px-7 text-base font-medium text-text transition hover:opacity-80 active:opacity-60' type="submit" disabled={isPending}>
                Добавить
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }