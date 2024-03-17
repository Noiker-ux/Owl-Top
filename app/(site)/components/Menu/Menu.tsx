'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import style from './Menu.module.css';
import classNames from 'classnames';
import Link from 'next/link';

import { TopLevelCategory } from '@/interfaces/page.interface';
import { useEffect, useState } from 'react';
import { writeCookies } from '@/actions/action';
import { usePathname } from 'next/navigation';
import { firstLevelMenu } from '../../../../const/FirstLvl';
import FirstLevel from './FirstLevel/FirstLevel';
import { useMenu } from './MenuContext';

export function Menu() {
	const menuValues = useMenu();
	const menuItems = menuValues.firstLevelMenu;
	const menuIndex = menuValues.firstLvlIndex;
	const route = usePathname();

	const handleClickFirstLVL = async (id: number) => {
		await writeCookies('FirstLVL', String(id));
	};

	// const openThird = (subMenu: string) => {
	// 	setMenu(
	// 		menu.map((m) => {
	// 			let isOpened = m.isOpened;
	// 			if (m._id.secondCategory === subMenu) {
	// 				isOpened = !isOpened;
	// 			}
	// 			return { ...m, isOpened };
	// 		}),
	// 	);
	// };

	// Array(4)
	// 	.fill(null)
	// 	.map((e, i) => {
	// 		return <FirstLvlvMenu isOpen={i === menuIndex} items={menuItems}>

	// 		</FirstLvlvMenu>;
	// 	});

	// {buildFirstLevel()}
	return (
		<div className={style.menu}>
			{firstLevelMenu.map((menuItem, index) => (
				<FirstLevel id={index} key={index} item={menuItem} />
			))}
		</div>
	);
}
