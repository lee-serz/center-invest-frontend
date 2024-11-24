import { forwardRef } from 'react'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
	readOnly?: boolean;
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, extra, type, placeholder, readOnly,  state, disabled, isNumber, ...rest },
		ref
	) => {
		return (
			<div className={`${extra} text-text`}>
				<label
					htmlFor={id}
					className={`text-sm text-text ml-1.5 font-medium`}
				>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					readOnly={readOnly}
					placeholder={placeholder}
					className={`mt-2 flex w-full bg-foreground items-center justify-center rounded-lg  p-3 text-base outline-none placeholder:text-text placeholder:font-normal duration-500 transition-colors focus:border-primary ${
						disabled === true
							? '!border-none !bg-gray-100 dark:!bg-white/5 ]'
							: state === 'error'
								? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'
								: state === 'success'
									? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400'
									: ''
					}`}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>
			</div>
		)
	}
)

Field.displayName = 'field'
