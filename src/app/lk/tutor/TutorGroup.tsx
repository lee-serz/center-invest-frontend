'use client'

import { Suspense } from 'react'
import { useGetAllGroup } from '@/app/hooks/useGetAllGroup'

function GroupTable() {
	// const { data: groups } = useGetTutorGroup() // Получение данных групп

	return (
		<div className="group-list">
			<h2 className="text-lg font-bold mb-4">Список групп</h2>
			<table className="table-auto w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-foreground">
						<th className="border border-gray-300 px-4 py-2">ID</th>
						<th className="border border-gray-300 px-4 py-2">Название</th>
						<th className="border border-gray-300 px-4 py-2">Описание</th>
						<th className="border border-gray-300 px-4 py-2">Ссылка-приглашение</th>
					</tr>
				</thead>
				<tbody>
					{groups?.map((group) => ( // Проверка на наличие данных перед вызовом map
						<tr key={group.id} className="hover:bg-foreground">
							<td className="border border-gray-300 px-4 py-2 text-center">{group.id}</td>
							<td className="border border-gray-300 px-4 py-2">{group.name || 'Без названия'}</td>
							<td className="border border-gray-300 px-4 py-2">{group.description}</td>
							<td className="border border-gray-300 px-4 py-2">
								<a
									className="text-blue-500 underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									{group.inviteLink}
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export function Group() {
	return (
		<Suspense fallback={<div>Загрузка групп...</div>}>
			<GroupTable />
		</Suspense>
	)
}
