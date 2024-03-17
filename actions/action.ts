'use server';

import { getMenu } from '@/api/api';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';

export async function ActionGet() {
	const menuIndex = await readCookies('FirstLVL');
	if (!menuIndex?.value) return [];
	const menu = await getMenu(Number(menuIndex.value));
	return menu;
}

export async function writeCookies(key: string, value: string) {
	const cookiesStore = cookies();
	cookiesStore.set(key, value);
}

export async function readCookies(key: string) {
	const cookiesStore = cookies();
	return cookiesStore.get(key);
}

export const revalidateTagAction = async (tag: string) => revalidateTag(tag);

export async function getServerPathname() {
	const reqHeaders = headers();
	return reqHeaders.get('x-pathname');
}
