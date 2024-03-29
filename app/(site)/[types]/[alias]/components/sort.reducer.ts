import { ProductModel } from '@/interfaces/product.interface';
import { SortEnum } from './Sort/Sort.props';

export type SortActions =
	| { type: SortEnum.Price; filter: 'asc' | 'desc' }
	| { type: SortEnum.Rating; filter: 'asc' | 'desc' };

export interface SortReducerState {
	sort: SortEnum;
	products: ProductModel[];
	filter: 'asc' | 'desc';
}

export const SortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
	switch (action.type) {
		case SortEnum.Rating:
			if (action.filter === 'desc') {
				return {
					sort: SortEnum.Rating,
					products: state.products.sort((a, b) => (a.initialRating < b.initialRating ? -1 : 1)),
					filter: 'desc',
				};
			} else {
				return {
					sort: SortEnum.Rating,
					products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
					filter: 'desc',
				};
			}

		case SortEnum.Price:
			if (action.filter === 'desc') {
				return {
					sort: SortEnum.Price,
					products: state.products.sort((a, b) => (a.price < b.price ? 1 : -1)),
					filter: 'desc',
				};
			} else {
				return {
					sort: SortEnum.Price,
					products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
					filter: 'asc',
				};
			}
		default:
			throw new Error('Неверный тип сортировки');
	}
};
