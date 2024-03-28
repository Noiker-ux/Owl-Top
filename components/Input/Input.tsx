import IInputProps from './Input.props';
import style from './Input.module.css';
import classNames from 'classnames';
export const Input = ({ className, ...props }: IInputProps) => {
	return <input className={classNames(style.input, className)} {...props}></input>;
};
