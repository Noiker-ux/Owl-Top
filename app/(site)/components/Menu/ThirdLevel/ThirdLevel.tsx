import Link from 'next/link';
import style from './ThirdLevel.module.css';
import classNames from 'classnames';
import { useMenu } from '../MenuContext';
import { firstLevelMenu } from '../../../../../const/FirstLvl';
import { usePathname } from 'next/navigation';

export default function ThirdLevel({ alias, category }: { alias: string; category: string }) {
	const idxFLVLnow = useMenu();
	const FlvlType = firstLevelMenu.find((m) => {
		return m.id === idxFLVLnow.firstLvlIndex;
	});
	const route = usePathname();

	return (
		<Link
			key={alias}
			href={`/${FlvlType?.route}/${alias}`}
			className={classNames(style.thirdLevel, {
				[style.thirdLevelActive]: route.split('/').includes(alias),
			})}>
			{category}
		</Link>
	);
}
