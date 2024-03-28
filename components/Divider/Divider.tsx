import IDividerProps from './Divider.props';
import style from './Divider.module.css';
import classNames from 'classnames';

export const Divider = ({ className, ...props }: IDividerProps) => {
	return <hr className={classNames(style.divider, className)} {...props} />;
};
