import type { IBase } from './root.types'

export interface ICategoriesResponse {
	id: string;
	name: string
}

export interface IFormCategories {
	name: string;
}

export type TypeCategoriesFormState = Partial<Omit<ICategoriesResponse, 'id' | 'updatedAt'>>
