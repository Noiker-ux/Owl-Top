'use client';
import { HTag, Tag } from '@/components';
import style from './TopPage.module.css';
import ITopPage from './TopPage.props';
import { Sort } from '../Sort/Sort';
import { SortEnum } from '../Sort/Sort.props';
import { useReducer } from 'react';
import { SortReducer } from '../sort.reducer';
import { Product } from '../Product/Product';

export const TopPage = ({ title, products }: ITopPage) => {
	const [{ products: sortProducts, sort }, dispatchSort] = useReducer(SortReducer, {
		products,
		sort: SortEnum.Rating,
	});

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
		<div className={style.title}>
			<HTag tag='h1'>{title}</HTag>
			{products && (
				<Tag color='grey' size='medium'>
					{products.length}
				</Tag>
			)}
			<Sort sort={sort} setSort={setSort} />
			<div className={style.products}>
				{sortProducts.map((p) => (
					<Product key={p._id} product={p} />
				))}
			</div>
		</div>
	);
};
