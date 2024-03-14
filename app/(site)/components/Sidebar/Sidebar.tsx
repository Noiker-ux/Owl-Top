import ISidebarProps from './Sidebar.props';
import style from './Sidebar.module.css';
import classNames from 'classnames';
import { Menu } from '../Menu/Menu';
import { getMenu } from '../../../../api/api';
import { cookies } from 'next/headers';

export async function Sidebar({ ...props }: ISidebarProps) {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
}
