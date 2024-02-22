import { IParagraphProps } from './Paragraph.props';
import style from './Paragraph.module.css';
import classNames from 'classnames';

export const Paragraph = ({
	children,
	className,
	size = 'medium',
	...props
}: IParagraphProps): JSX.Element => {
	return (
		<p
			className={classNames(style.paragraph, className, {
				[style.big]: size === 'big',
				[style.medium]: size === 'medium',
				[style.small]: size === 'small',
			})}
			{...props}>
			{children}
		</p>
	);
};
