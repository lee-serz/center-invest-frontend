import type { IBase } from './root.types'
export interface ICategoriesResponse {
	name: string
}

export interface IFormCategories {
	name: string;
}

export interface IFormGroups {
	name: string;
	description?: string
}

export interface IChangeRole {
	role: string;
}

export type TypeCategoriesFormState = Partial<Omit<ICategoriesResponse, 'id' | 'updatedAt'>>
