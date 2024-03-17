import { MenuItem } from '@/interfaces/menu.interface';
import { API } from './api.links';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.find, {
		next: { tags: ['FirstLevel'] },
		method: 'POST',
		body: JSON.stringify({
			firstCategory,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}
