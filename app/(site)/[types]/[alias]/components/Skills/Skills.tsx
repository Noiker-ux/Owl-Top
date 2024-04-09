import { HTag, Tag } from '@/components';
import ISkills from './Skills.props';
import style from './Skills.module.css';
import classNames from 'classnames';

export const Skills = ({ tags, className, ...props }: ISkills) => {
	return (
		<div className={classNames(style.skillwrapper, className)} {...props}>
			<HTag tag='h2'>Получаемые навыки</HTag>
			{tags.map((t) => (
				<Tag color='primary' key={t} className={style.tag}>
					{t}
				</Tag>
			))}
		</div>
	);
};
