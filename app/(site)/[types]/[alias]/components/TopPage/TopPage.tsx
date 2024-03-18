import { HTag, Tag } from '@/components';
import style from './TopPage.module.css';
import ITopPage from './TopPage.props';

export const TopPage = ({ title, products }: ITopPage) => {
	return (
		<div className={style.title}>
			<HTag tag='h1'>{title}</HTag>
			{products && (
				<Tag color='grey' size='medium'>
					{products.length}
				</Tag>
			)}
			<span>Сортировка</span>
			<div>
				{products.map((p) => (
					<div key={p._id}>{p.title}</div>
				))}
			</div>
		</div>
	);
};
