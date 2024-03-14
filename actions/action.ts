'use server';

import { getMenu } from '@/api/api';
import { cookies } from 'next/headers';

export async function ActionSet(key: string, value: string) {
	const cookieStore = cookies();
	cookieStore.set(key, value);
	const menu = await getMenu(Number(value));
	return menu;
}
