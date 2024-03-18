import classNames from 'classnames';
import ICard from './Card.props';
import style from './Card.module.css';

export const Card = ({ color = 'white', className, children, ...props }: ICard) => {
	return (
		<div
			className={classNames(style.card, className, {
				[style.blue]: color === 'blue',
			})}
			{...props}>
			{children}
		</div>
	);
};
