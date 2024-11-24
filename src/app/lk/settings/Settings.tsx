'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { TypeUserForm } from '@/types/auth.types'
import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'
import toast from 'react-hot-toast'

export function Settings() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeUserForm>({
    mode: 'onChange'
  })

  useInitialData(reset);

  const { isPending, mutate, isCooldown } = useUpdateSettings()

  const onSubmit: SubmitHandler<TypeUserForm> = data => {
    if (!isCooldown) {
      const { password, ...rest } = data
      mutate({
        ...rest,
        password: password || undefined
      })
    } else {
      toast.error('После истечения времени (1 минута), попробуйте снова')
    }
  }

  return (
    <div>
      <form
        className='w-2/4 max-lg:w-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid grid-cols-2 gap-10 max-lg:grid-cols-1'>
          <div>
            <Field
              id='email'
              label=''
              placeholder='Почта'
              type='email'
              {...register('email', {
                required: 'Email is required!'
              })}
              extra='mb-4'
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}

            <Field
              id='name'
              label=''
              placeholder='Имя'
              {...register('name')}
              extra='mb-4'
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}

            <Field
              id='password'
              label=''
              placeholder='Сменить пароль'
              type='password'
              {...register('password')}
              extra='mb-10'
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Field
              id='workInterval'
              label='Длительность круга помодоро(мин.)'
              placeholder=''
              isNumber
              {...register('workInterval', {
                valueAsNumber: true,
                required: 'Work interval is required!'
              })}
              extra='mb-4'
            />
            {errors.workInterval && (
              <p className="text-red-500 text-sm mt-1">{errors.workInterval.message}</p>
            )}

            <Field
              id='breakInterval'
              label='Длительность отдыха помодоро(мин.)'
              placeholder=''
              isNumber
              {...register('breakInterval', {
                valueAsNumber: true,
                required: 'Break interval is required!'
              })}
              extra='mb-4'
            />
            {errors.breakInterval && (
              <p className="text-red-500 text-sm mt-1">{errors.breakInterval.message}</p>
            )}

            <Field
              id='intervalsCount'
              label='Количество кругов помодоро'
              placeholder=''
              isNumber
              {...register('intervalsCount', {
                valueAsNumber: true,
                required: 'Intervals count is required!'
              })}
              extra='mb-6'
            />
            {errors.intervalsCount && (
              <p className="text-red-500 text-sm mt-1">{errors.intervalsCount.message}</p>
            )}
          </div>

          <div className='mb-5'>
            <h2>Внешние сервисы: Telegram</h2>
            <a href="https://t.me/centr_invest_testbot"> 
            Перейти в сервис 
            </a>
            <div className="mb-5">
              <Field
                  id='token'
                  label='Ваш личный токен для подключения бота к системе'
                  placeholder=''
                  isNumber
                  {...register('token')} 
                  extra='mb-6'
                  readOnly
                />
                <Button
                  type='submit'
                  disabled={isPending}
                >
                  Сохранить
                </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
