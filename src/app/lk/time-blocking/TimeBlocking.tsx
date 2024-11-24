'use client'

import { FormProvider, useForm } from 'react-hook-form'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import { TimeBlockingList } from './TimeBlockingList'
import { TimeBlockingForm } from './form/TimeBlockingForm'

export function TimeBlocking() {
	const methods = useForm<TypeTimeBlockFormState>()

	return (
		<FormProvider {...methods}>
			<div className='grid grid-cols-2 gap-12 max-lg:flex max-lg:flex-col-reverse max-lg:pb-10'>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
