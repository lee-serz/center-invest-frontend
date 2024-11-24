// 'use client'

// import userService from '@/services/user.service'
// import { useQuery } from '@tanstack/react-query'

// export function PremiumContent() {
// 	const { data, isLoading } = useQuery({
// 		queryKey: ['premium-content'],
// 		queryFn: () => userService.fetchPremium()
// 	})

// 	return (
// 		<div>
// 			<h1>Only for premium users</h1>
// 			{isLoading ? (
// 				<div>Loading...</div>
// 			) : (
// 				<p>{data?.data.text || 'Not found!'}</p>
// 			)}
// 		</div>
// 	)
// }
