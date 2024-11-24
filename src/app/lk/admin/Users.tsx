'use client'

import { Suspense } from 'react'
import { useGetAllUsers } from '@/app/hooks/useGetAllUsers'
import { useDeleteUser } from '@/app/hooks/useDeleteUser'
import { useChangeRole } from '@/app/hooks/useChangeRole'

function UsersTable() {
	const { data: users } = useGetAllUsers()
	const { deleteUser, isDeletePending } = useDeleteUser()
	const { changeRole, isPending: isChangeRolePending } = useChangeRole()

	// Функция для удаления пользователя
	const handleDelete = (userId: string) => {
		if (confirm('Вы уверены, что хотите удалить этого пользователя?')) {
			deleteUser(userId)
		}
	}

	// Функция для изменения роли пользователя
	const handleChangeRole = (userId: string, newRole: string) => {
		if (confirm(`Вы уверены, что хотите изменить роль пользователя на "${newRole}"?`)) {
			changeRole({ userId, data: { role: newRole } })
		}
	}

	return (
		<div className="users-list">
			<h2 className="text-lg font-bold mb-4">Список пользователей</h2>
			<table className="table-auto w-full border-collapse border border-foreground">
				<thead>
					<tr className="bg-foreground">
						<th className="border border-gray-300 px-4 py-2">ID</th>
						<th className="border border-gray-300 px-4 py-2">Имя</th>
						<th className="border border-gray-300 px-4 py-2">Email</th>
						<th className="border border-gray-300 px-4 py-2">Роли</th>
						<th className="border border-gray-300 px-4 py-2">Действия</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user.id} className="hover:bg-foreground">
							<td className="border border-gray-300 px-4 py-2 text-center">
								{user.id}
							</td>
							<td className="border border-gray-300 px-4 py-2">
								{user.name || 'Не указано'}
							</td>
							<td className="border border-gray-300 px-4 py-2">{user.email}</td>
							<td className="border border-gray-300 px-4 py-2">
								{user.rights.map((role, index) => (
									<span
										key={index}
										className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2"
									>
										{role}
									</span>
								))}
							</td>
							<td className="border border-gray-300 px-4 py-2 text-center">
								<div className="flex space-x-2 justify-center">
									<button
										onClick={() => handleDelete(user.id)}
										className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
										disabled={isDeletePending}
									>
										Удалить
									</button>
									<button
										onClick={() => handleChangeRole(user.id, 'TUTOR')}
										className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
										disabled={isChangeRolePending}
									>
										Повысить права
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export function Users() {
	return (
		<Suspense fallback={<div>Загрузка пользователей...</div>}>
			<UsersTable />
		</Suspense>
	)
}
