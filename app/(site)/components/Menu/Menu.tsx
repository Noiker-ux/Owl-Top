'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import style from './Menu.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import CoursesIcon from './icons/Courses.svg';
import SevicesIcon from './icons/Services.svg';
import BooksIcon from './icons/Book.svg';
import ProductsIcon from './icons/Products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { useState } from 'react';
import { ActionSet } from '@/actions/action';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <SevicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export function Menu() {
	const [menu, setMenu] = useState<MenuItem[]>([]);
	const [firstCategory, setFirstCategory] = useState(0);

	const handleClickFirstLVL = async (id: number) => {
		const menu = await ActionSet('FirstLVLMenu', String(id));
		setMenu(menu);
		setFirstCategory(id);
	};

	const openThird = (subMenu: string) => {
		setMenu(
			menu.map((m) => {
				let isOpened = m.isOpened;
				if (m._id.secondCategory === subMenu) {
					isOpened = !isOpened;
				}
				return { ...m, isOpened };
			}),
		);
	};

	const buildFirstLevel = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map((menuItem) => (
					<div
						key={menuItem.route}
						className={classNames(style.firstLevel, {
							[style.firstLevelActive]: menuItem.id === firstCategory,
						})}>
						{menuItem.icon}
						<span
							onClick={() => {
								handleClickFirstLVL(menuItem.id);
							}}>
							{menuItem.name}
						</span>
						{menuItem.id === firstCategory && menu && buildSecondLevel()}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = () => {
		return (
			<div className={style.secondBlock}>
				{menu.map((subMenu) => (
					<span
						key={subMenu._id.secondCategory}
						className={classNames(style.secondLevel, {
							[style.secondLevelBlockOpened]: subMenu.isOpened,
						})}
						onClick={() => {
							openThird(subMenu._id.secondCategory);
						}}>
						{subMenu._id.secondCategory}
						<div>{subMenu.isOpened && thirdSecondLevel(subMenu.pages)}</div>
					</span>
				))}
			</div>
		);
	};

	const thirdSecondLevel = (pages: PageItem[]) => {
		return (
			<div className={style.thirdLevelBlock}>
				{pages.map((p) => (
					<Link key={p.alias} href={`/${p.alias}`} className={classNames(style.thirdLevel)}>
						{p.category}
					</Link>
				))}
			</div>
		);
	};

	return <div className={style.menu}>{buildFirstLevel()}</div>;
}
