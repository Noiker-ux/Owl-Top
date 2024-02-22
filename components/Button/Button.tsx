import style from './Button.module.css';
import { IButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import classNames from 'classnames';

export const Button = ({
	appereance,
	children,
	className,
	arrow = 'none',
	...props
}: IButtonProps): JSX.Element => {
	return (
		<button
			className={classNames(style.button, className, {
				[style.primary]: appereance == 'primary',
				[style.ghost]: appereance == 'ghost',
			})}
			{...props}>
			{children}
			{arrow !== 'none' && (
				<span
					className={classNames(style.arrow, {
						[style.down]: arrow === 'down',
					})}>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
