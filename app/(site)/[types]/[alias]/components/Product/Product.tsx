import { Card } from '../Card/Card';
import IProductProps from './Product.props';
import style from './Product.module.css';
import { Button, Divider, Rating, Tag } from '@/components';
import classNames from 'classnames';
import PriceRu from '@/utils/priceRu';
import decOfNum from '@/utils/decOfNum';
import Image from 'next/image';

export const Product = ({ product, className }: IProductProps) => {
	return (
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
				{product.reviewCount} {decOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
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
			<Divider className={style.hr} />
			<div className={style.actions}>
				<Button appereance='primary'>Узнать подробнее</Button>
				<Button appereance='ghost' className={style.reviewButton} arrow='right'>
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};
