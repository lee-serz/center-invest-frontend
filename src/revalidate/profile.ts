'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function actionProfile() {
  revalidateTag('profile')
}