import ISidebarProps from './Sidebar.props';
import style from './Sidebar.module.css';
import classNames from 'classnames';

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
	return <div {...props}>Sidebar</div>;
};
