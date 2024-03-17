import classNames from 'classnames';
import style from './SecondLevel.module.css';
import { FirstLevelMenuItem, MenuItem } from '@/interfaces/menu.interface';
import ThirdLevel from '../ThirdLevel/ThirdLevel';
import { useMenu } from '../MenuContext';
import { useState, useEffect } from 'react';

type TSecondLevel = {
	index: number;
};

const secondLevelCookieKey = 'SecondLVL';

export default function SecondLevel({ index }: TSecondLevel) {
	const menuValues = useMenu();

	const [isOpen, setOpen] = useState(index === menuValues.secondMenuIndex);

	useEffect(() => {
		setOpen(index === menuValues.secondMenuIndex);
	}, [index, menuValues.secondMenuIndex]);

	const menu = menuValues.firstLevelMenu.at(index);
	if (!menu) return null;

	return (
		<>
			<div
				key={menu._id.secondCategory}
				className={classNames(style.secondLevel, {
					[style.secondLevelBlockOpened]: isOpen,
				})}
				onClick={() => {
					setOpen(!isOpen);
				}}>
				{menu._id.secondCategory}
			</div>
			<div className={style.thirdLevelBlock}>
				{isOpen &&
					menu.pages.map((p) => <ThirdLevel key={p._id} alias={p.alias} category={p.category} />)}
			</div>
		</>
	);
}
