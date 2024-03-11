import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import style from './Menu.module.css';
import classNames from 'classnames';
import { getMenu } from '@/app/api/api';
import CoursesIcon from './icons/Courses.svg';
import SevicesIcon from './icons/Services.svg';
import BooksIcon from './icons/Book.svg';
import ProductsIcon from './icons/Products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <SevicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export async function Menu() {
	const { menu, firstCategory, setMenu } = useContext(AppContext);

	const buildFirstLevel = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div
								className={classNames(style.firstLevel, {
									[style.firstLevelActive]: menu.id == firstCategory,
								})}>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</a>
						{menu.id == firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};
	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={style.secondBlock}>
				{menu.map((m) => (
					<div key={m._id.secondCategory}>
						<div className={style.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={classNames(style.secondLevelBlock, {
								[style.secondLevelBlockOpened]: m.isOpened,
							})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<a
				key={p.alias}
				href={`/${route}/${p.alias}`}
				className={classNames(style.thirdLevel, {
					[style.thirdLevelActive]: false,
				})}>
				{p.category}
			</a>
		));
	};

	return <div className={style.menu}>{buildFirstLevel()}</div>;
}
