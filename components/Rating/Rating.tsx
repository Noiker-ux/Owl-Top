'use client';

import { KeyboardEvent, useEffect, useState } from 'react';
import IRatingProps from './Rating.props';
import StarIcon from './star.svg';
import style from './Rating.module.css';
import classNames from 'classnames';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: IRatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const changeDisplay = (i: number): void => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClickRating = (i: number): void => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					key={i}
					className={classNames({
						[style.filed]: i < currentRating,
						[style.editable]: isEditable,
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClickRating(i + 1)}>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	return (
		<div {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => (
				<span className={style.star} key={i}>
					{r}
				</span>
			))}
		</div>
	);
};
