import ISidebarProps from './Sidebar.props';
import style from './Sidebar.module.css';
import classNames from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from '../../logo.svg';
import { ActionGet, getServerPathname } from '@/actions/action';
import { cookies } from 'next/headers';
import { firstLevelMenu } from '../../../../const/FirstLvl';
import { MenuProvider } from '../Menu/MenuContext';
import { Search } from '@/components';

export async function Sidebar({ className, ...props }: ISidebarProps) {
	const pathname = await getServerPathname();
	const firstLevelMenuIDX = firstLevelMenu.findIndex((e) => pathname?.includes(e.route));
	const menu = await ActionGet();
	const secondMenuIndex = menu.findIndex((el) => {
		return el.pages.findIndex((page) => pathname?.includes(page.alias)) !== -1;
	});
	return (
		<div className={classNames(style.sidebar, className)} {...props}>
			<Logo className={style.logo} />
			<Search />
			<MenuProvider
				firstLvlIndex={firstLevelMenuIDX}
				secondMenuIndex={secondMenuIndex}
				firstLevelMenu={menu}>
				<Menu />
			</MenuProvider>
		</div>
	);
}
