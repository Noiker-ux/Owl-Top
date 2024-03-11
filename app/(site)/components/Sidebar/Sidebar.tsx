'use client';
import ISidebarProps from './Sidebar.props';
import style from './Sidebar.module.css';
import classNames from 'classnames';
import { Menu } from '../Menu/Menu';
import { AppContext } from '@/context/app.context';
import { getMenu } from '../../../api/api';

export async function Sidebar({ ...props }: ISidebarProps) {
	const menu = await getMenu(0);
	return (
		<AppContext.Provider value={{ menu: menu, firstCategory: 0 }}>
			<div {...props}>
				<Menu />
			</div>
		</AppContext.Provider>
	);
}
