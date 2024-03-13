'use client';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import style from './Menu.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import CoursesIcon from './icons/Courses.svg';
import SevicesIcon from './icons/Services.svg';
import BooksIcon from './icons/Book.svg';
import ProductsIcon from './icons/Products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { usePathname } from 'next/navigation';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <SevicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export function Menu() {
	const { menu, firstCategory, setMenu } = useContext(AppContext);
	const router = usePathname();
	const openSecondLevel = (secondCategory: string) => {
		menu.map((m) => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		});
		setMenu && setMenu(menu);
	};

	const buildFirstLevel = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<Link href={`/${menu.route}`}>
							<div
								className={classNames(style.firstLevel, {
									[style.firstLevelActive]: menu.id == firstCategory,
								})}>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</Link>
						{menu.id == firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};
	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={style.secondBlock}>
				{menu.map((m) => {
					if (m.pages.map((p) => p.alias).includes(router.split('/')[2])) {
						m.isOpened = !m.isOpened;
					}
					return (
						<div key={m._id.secondCategory}>
							<div
								className={style.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</div>
							<div
								className={classNames(style.secondLevelBlock, {
									[style.secondLevelBlockOpened]: m.isOpened,
								})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			<div className={style.thirdLevelBlock}>
				{pages.map((p) => (
					<Link
						key={p.alias}
						href={`/${route}/${p.alias}`}
						className={classNames(style.thirdLevel, {
							[style.thirdLevelActive]: `/${route}/${p.alias}` == router,
						})}>
						{p.category}
					</Link>
				))}
			</div>
		);
	};

	return <div className={style.menu}>{buildFirstLevel()}</div>;
}
