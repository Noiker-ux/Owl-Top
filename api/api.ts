import { MenuItem } from '@/interfaces/menu.interface';
import { API } from './api.links';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.find, {
		method: 'POST',
		body: JSON.stringify({
			firstCategory,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}

export async function getPage(alias: string) {
	const res = await fetch(API.topPage.byAlias + alias, {
		next: { revalidate: 10 },
	});
	return res.json();
}
