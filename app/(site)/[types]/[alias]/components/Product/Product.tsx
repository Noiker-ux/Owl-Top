import { Card } from '../Card/Card';
import IProductProps from './Product.props';
import style from './Product.module.css';
import { Button, Divider, Rating, Tag } from '@/components';
import classNames from 'classnames';
import PriceRu from '@/utils/priceRu';
import decOfNum from '@/utils/decOfNum';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Product = ({ product, className }: IProductProps) => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const refReview = useRef<HTMLDivElement>(null);

	const scrollToReview = () => {
		setIsReviewOpened(true);
		refReview.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div className={style.className}>
			<Card className={classNames(style.product, className)} color='white'>
				<div className={style.logo}>
					<Image src={product.image} alt={product.title} width={70} height={70} />
				</div>
				<div className={style.title}>{product.title}</div>
				<div className={style.price}>
					{PriceRu(product.price)}
					{product.oldPrice && (
						<Tag className={style.oldPrice} color='green'>
							{PriceRu(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>
				<div className={style.credit}>
					{PriceRu(product.credit)}/<span className={style.month}>мес</span>
				</div>
				<div className={style.rating}>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={style.tags}>
					{product.categories.map((c) => (
						<Tag key={c} color='ghost' className={style.category}>
							{c}
						</Tag>
					))}
				</div>
				<div className={style.priceTitle}>Цена</div>
				<div className={style.creditTitle}>Кредит</div>
				<div className={style.rateTitle}>
					<a onClick={scrollToReview} href='#ref'>
						{product.reviewCount} {decOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
					</a>
				</div>
				<Divider className={style.hr} />
				<div className={style.description}>{product.description}</div>
				<div className={style.feature}>
					{product.characteristics.map((ch) => (
						<div key={ch.name} className={style.characteristics}>
							<span className={style.characteristicsName}>{ch.name}</span>
							<span className={style.characteristicsDots}></span>
							<span className={style.characteristicsValue}>{ch.value}</span>
						</div>
					))}
				</div>
				<div className={style.advBlock}>
					{product.advantages && (
						<div className={style.advantages}>
							<div className={style.advTitle}>Преимущества</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={style.disadvantages}>
							<div className={style.advTitle}>Недостатки</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>
				<Divider className={classNames(style.hr, style.hr2)} />
				<div className={style.actions}>
					<Button appereance='primary'>Узнать подробнее</Button>
					<Button
						onClick={() => setIsReviewOpened(!isReviewOpened)}
						appereance='ghost'
						className={style.reviewButton}
						arrow={isReviewOpened ? 'down' : 'right'}>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<Card
				ref={refReview}
				color='blue'
				className={classNames(style.reviews, {
					[style.opened]: isReviewOpened,
					[style.closed]: !isReviewOpened,
				})}>
				{product.reviews.map((r) => (
					<div key={r._id}>
						<Review review={r} />
						<Divider />
					</div>
				))}
				<ReviewForm productId={product._id} />
			</Card>
		</div>
	);
};
