import { HTag, Tag } from '@/components';
import ISkills from './Skills.props';
import style from './Skills.module.css';

export const Skills = ({ tags }: ISkills) => {
	return (
		<>
			<HTag tag='h2'>Получаемые навыки</HTag>
			{tags.map((t) => (
				<Tag color='primary' key={t} className={style.tag}>
					{t}
				</Tag>
			))}
		</>
	);
};
