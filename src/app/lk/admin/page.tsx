'use client'

import { useState } from 'react'
import { Group } from './Group'
import { Users } from './Users'


export default function AdminPage() {
	const [visibleComponent, setVisibleComponent] = useState<'group' | 'users'>('group')

	return (
		<>
			<div className="flex justify-center gap-4 mb-4">
				<button
					onClick={() => setVisibleComponent('group')}
					className={`px-4 py-2 rounded ${
						visibleComponent === 'group' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
					}`}
				>
					Группы
				</button>
				<button
					onClick={() => setVisibleComponent('users')}
					className={`px-4 py-2 rounded ${
						visibleComponent === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
					}`}
				>
					Пользователи
				</button>
			</div>

			<div>
				{visibleComponent === 'group' && <Group />}
				{visibleComponent === 'users' && <Users />}
			</div>
		</>
	)
}
