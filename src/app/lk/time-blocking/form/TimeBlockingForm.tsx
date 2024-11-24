import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/buttons/Button';
import { Field } from '@/components/ui/fields/Field';
import { SingleSelect } from '@/components/ui/task-edit/SingleSelect';
import type { TypeTimeBlockFormState } from '@/types/time-block.types';
import { COLORS } from './colors.data';
import { useCreateTimeBlock } from './useCreateTimeBlock';
import { useUpdateTimeBlock } from './useUpdateTimBlock';

export function TimeBlockingForm() {
  const { register, control, watch, reset, handleSubmit, formState: { errors } } = useFormContext<TypeTimeBlockFormState>();

  const existsId = watch('id');

  const { updateTimeBlock } = useUpdateTimeBlock(existsId);
  const { createTimeBlock, isPending } = useCreateTimeBlock();

  const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
    const { color, id, ...rest } = data;
    const dto = { ...rest, color: color || undefined };

    if (id) {
      updateTimeBlock({
        id,
        data: dto
      });
    } else {
      createTimeBlock(dto);
    }

    reset({
      color: COLORS[COLORS.length - 1],
      duration: 0,
      name: '',
      id: undefined,
      order: 1
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-lg:flex max-lg:flex-col'>
      <Field
        {...register('name', {
          required: true
        })}
        id='name'
        label=''
        placeholder='Название задачи'
        extra='mb-4'
      />

      <Field
        {...register('duration', {
          required: 'Это поле обязательно',
          valueAsNumber: true,
          max: {
            value: 600,
            message: 'Длительность не может превышать 600 минут'
          }
        })}
        id='duration'
        label=''
        placeholder='Длительность (мин.):'
        isNumber
        extra='mb-4'
        max={600} // Ограничение на максимальное значение
      />
      {errors.duration && <p>{errors.duration.message}</p>}

      <div>
        <span className='inline-block mb-1.5'>Цвет:</span>
        <Controller
          control={control}
          name='color'
          render={({ field: { value, onChange } }) => (
            <SingleSelect
              data={COLORS.map(item => ({
                value: item,
                label: item
              }))}
              onChange={onChange}
              value={value || COLORS[COLORS.length - 1]}
              isColorSelect
            />
          )}
        />
      </div>

      <Button
        type='submit'
        disabled={isPending}
        className='mt-6 text-text border-text hover:bg-foreground'
      >
        {existsId ? 'Update' : 'Create'}
      </Button>
    </form>
  );
}
