import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Categories } from './Categories'

export const metadata: Metadata = {
	title: 'Categories',
	...NO_INDEX_PAGE
}

export default function CategoriesPage() {
	return (
		<div className='p-2 pr-0 pb-0'>
			<Heading title='Создание категорий' />
            <Categories/>
		</div>
	)
}
