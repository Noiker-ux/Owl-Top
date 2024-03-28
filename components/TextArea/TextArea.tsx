import ITextAreaProps from './TextArea.props';
import style from './TextArea.module.css';
import classNames from 'classnames';
export const TextArea = ({ className, ...props }: ITextAreaProps) => {
	return <textarea className={classNames(style.textarea, className)} {...props}></textarea>;
};
