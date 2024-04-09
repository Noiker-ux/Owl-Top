import IInputProps from './Input.props';
import style from './Input.module.css';
import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(function Input(
	{ className, error, ...props }: IInputProps,
	ref: ForwardedRef<HTMLInputElement>,
) {
	return (
		<div className={classNames(style.inputWrapperr, className)}>
			<input
				ref={ref}
				className={classNames(style.input, className, {
					[style.error]: error,
				})}
				{...props}></input>
			{error && <span className={style.errorMessage}>{error.message}</span>}
		</div>
	);
});
