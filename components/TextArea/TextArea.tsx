import ITextAreaProps from './TextArea.props';
import style from './TextArea.module.css';
import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const TextArea = forwardRef(function TextArea(
	{ className, error, ...props }: ITextAreaProps,
	ref: ForwardedRef<HTMLTextAreaElement>,
) {
	return (
		<div className={classNames(style.wrapper, className)}>
			<textarea
				ref={ref}
				className={classNames(style.textarea, className, {
					[style.error]: error,
				})}
				{...props}></textarea>
			{error && <span className={style.errorMessage}>{error.message}</span>}
		</div>
	);
});
