import style from './Review.module.css';
import IReviewProps from './Review.props';
import classNames from 'classnames';
import UserIcon from './user.svg';
import { Rating } from '@/components';

export const Review = ({ review, className, ...props }: IReviewProps) => {
	const { name, title, description, createdAt, rating } = review;

	const formatter = new Intl.DateTimeFormat('ru', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div className={classNames(style.review, className)} {...props}>
			<UserIcon className={style.user} />
			<div className={style.title}>
				<span className={style.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={style.date}>{formatter.format(new Date(createdAt))}</div>
			<div className={style.rating}>
				<Rating rating={rating} />
			</div>
			<div className={style.description}>{description}</div>
		</div>
	);
};
