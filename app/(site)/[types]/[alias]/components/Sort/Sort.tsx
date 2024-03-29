import ISortProps, { SortEnum } from './Sort.props';
import SortIcon from './Sort.svg';
import style from './Sort.module.css';
import classNames from 'classnames';

export const Sort = ({ sort, filter, setSort, className, ...props }: ISortProps) => {
	return (
		<div className={classNames(style.sort, className)} {...props}>
			<span
				onClick={() => setSort(SortEnum.Rating)}
				className={classNames({
					[style.active]: sort == SortEnum.Rating,
				})}>
				<SortIcon
					className={classNames(style.sortIcon, {
						[style.asc]: filter === 'asc',
						[style.desc]: filter === 'desc',
					})}
				/>
				По рейтингу
			</span>

			<span
				onClick={() => setSort(SortEnum.Price)}
				className={classNames({
					[style.active]: sort == SortEnum.Price,
				})}>
				<SortIcon
					className={classNames(style.sortIcon, {
						[style.asc]: filter === 'asc',
						[style.desc]: filter === 'desc',
					})}
				/>
				По цене
			</span>
		</div>
	);
};
