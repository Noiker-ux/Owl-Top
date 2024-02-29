import IFooterProps from './Footer.props';
import style from './Footer.module.css';
import classNames from 'classnames';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
	return (
		<footer className={classNames(className, style.footer)} {...props}>
			<div>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
			<a href='#' target='blank'>
				Пользовательское соглашение
			</a>
			<a href='#' target='blank'>
				Политика конфиденциальности
			</a>
		</footer>
	);
};
