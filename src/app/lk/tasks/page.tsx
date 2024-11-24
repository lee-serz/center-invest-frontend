import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { TasksView } from './TasksView'
import { Categories } from '../categories/Categories'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	return (
		<div className='p-2 pr-0 pb-0'>
			<Heading title='Задачи' />
			<Categories />
			<TasksView />
		</div>
	)
}
