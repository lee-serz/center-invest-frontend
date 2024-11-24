import { categoriesService } from "@/services/categories.service"
import { IFormCategories, TypeCategoriesFormState } from "@/types/categoies.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"


export function useCategoriesForm() {
	const { register, handleSubmit, reset, formState, getValues } = useForm<IFormCategories>({
		mode: 'onChange'
	})

	const queryClient = useQueryClient()

	const { mutate: mutateCategories, isPending } = useMutation({
		mutationKey: ['create category'],
		mutationFn: (data: TypeCategoriesFormState) => categoriesService.createCategories(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories']
			}),
            reset(),
            toast.success("Категория успешно добавлена")
		}
	})

	const onSubmit: SubmitHandler<IFormCategories> = data => {
		return mutateCategories(data);
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
