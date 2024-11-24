const Checkbox = (props: {
	id?: string
	extra?: string
	color?:
	  | 'red'
	  | 'blue'
	  | 'green'
	  | 'yellow'
	  | 'orange'
	  | 'teal'
	  | 'navy'
	  | 'lime'
	  | 'cyan'
	  | 'pink'
	  | 'purple'
	  | 'amber'
	  | 'indigo'
	  | 'gray'
	[x: string]: unknown  // Заменили any на unknown
  }) => {
	const { extra, color, id, ...rest } = props
	const colorClass = color ? `checked:bg-${color}-500 dark:checked:bg-${color}-400` : 'checked:bg-brand-400 dark:checked:bg-brand-400'
	return (
	  <input
		id={id}
		type="checkbox"
		className={`defaultCheckbox relative inline-flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center
		  justify-center rounded-md border border-gray-900 text-white/0 outline-none transition ease-linear
		  checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 ${colorClass} ${extra}`}
		name="weekly"
		{...rest}
	  />
	)
  }
  
  export default Checkbox
  