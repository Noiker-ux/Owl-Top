import style from './Header.module.css';
import IHeaderProps from './Header.props';
import classNames from 'classnames';

export const Header = ({ ...props }: IHeaderProps): JSX.Element => {
	return <div {...props}>Header</div>;
};
