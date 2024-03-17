import { firstLevelMenu } from '@/const/FirstLvl';
import classNames from 'classnames';
import Link from 'next/link';
import style from './FirstLevel.module.css';
import { MenuItem } from '@/interfaces/menu.interface';
import { writeCookies } from '@/actions/action';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import SecondLevel from '../SecondLevel/SecondLevel';
import { useMenu } from '../MenuContext';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type TFirstLevel = {
	id: number;
	item: FirstLevelMenuItem;
};

export default function FirstLevel({ id, item }: TFirstLevel) {
	const menuValues = useMenu();
	const items = menuValues.firstLevelMenu;
	const [isOpen, setOpen] = useState(id === menuValues.firstLvlIndex);

	useEffect(() => {
		setOpen(id === menuValues.firstLvlIndex);
	}, [menuValues.firstLvlIndex, id]);

	return (
		<>
			<Link
				href={`/${item.route}`}
				key={item.route}
				className={classNames(style.firstLevel, {
					[style.firstLevelActive]: isOpen,
				})}>
				{item.icon}
				<span
					onClick={() => {
						writeCookies('FirstLVL', String(id));
					}}>
					{item.name}
				</span>
			</Link>

			<div className={style.secondBlock}>
				{isOpen &&
					items &&
					items.map((el, idx) => <SecondLevel key={el._id.secondCategory} index={idx} />)}
			</div>
		</>
	);
}
