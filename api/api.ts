import { MenuItem } from '@/interfaces/menu.interface';
import { API } from './api.links';
import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';

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

export async function getDetail(alias: string): Promise<TopPageModel> {
	const res = await fetch(API.topPage.byAlias + '/' + alias, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}

export async function getProduct(alias: string): Promise<ProductModel[]> {
	const res = await fetch(API.product.find, {
		method: 'POST',
		body: JSON.stringify({
			category: alias,
			limit: 10,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}
