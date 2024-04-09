import classNames from 'classnames';
import ICard from './Card.props';
import style from './Card.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(function Card(
	{ color = 'white', className, children, ...props }: ICard,
	ref: ForwardedRef<HTMLDivElement>,
) {
	return (
		<div
			ref={ref}
			className={classNames(style.card, className, {
				[style.blue]: color === 'blue',
			})}
			{...props}>
			{children}
		</div>
	);
});
