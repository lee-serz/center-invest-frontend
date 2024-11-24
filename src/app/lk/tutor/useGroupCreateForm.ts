import { categoriesService } from "@/services/categories.service"
import { IFormCategories, IFormGroups, TypeCategoriesFormState } from "@/types/categoies.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"


export function useGroupCreateForm() {
	const { register, handleSubmit, reset, formState, getValues } = useForm<IFormGroups>({
		mode: 'onChange'
	})

	const queryClient = useQueryClient()

	const { mutate: mutateGroups, isPending } = useMutation({
		mutationKey: ['create group'],
		mutationFn: (data: TypeCategoriesFormState) => categoriesService.createCategories(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['group all']
			}),
            reset(),
            toast.success("Группа успешно создана")
		}
	})

	const onSubmit: SubmitHandler<IFormGroups> = data => {
		return mutateGroups(data);
	  };
	  


	return {
		register,
		handleSubmit,
		onSubmit,
        isPending,
		formState,
		getValues
	}
}
