import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={cn(
				'linear rounded-lg bg-foreground py-2 px-7 text-base font-medium text-text transition hover:opacity-80 active:opacity-60',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
