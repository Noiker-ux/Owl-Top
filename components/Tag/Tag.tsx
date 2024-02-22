import { ITagProps } from './Tag.props';
import style from './Tag.module.css';
import classNames from 'classnames';

export const Tag = ({
	children,
	className,
	href,
	color = 'ghost',
	size = 'small',
	...props
}: ITagProps): JSX.Element => {
	return (
		<div
			className={classNames(style.tag, className, {
				[style.small]: size === 'small',
				[style.medium]: size === 'medium',

				[style.ghost]: color === 'ghost',
				[style.red]: color === 'red',
				[style.grey]: color === 'grey',
				[style.green]: color === 'green',
				[style.primary]: color === 'primary',
			})}
			{...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
