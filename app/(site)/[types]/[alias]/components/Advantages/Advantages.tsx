import { HTag } from '@/components';
import style from './Advantages.module.css';
import IAdvantages from './Advantages.props';
import CheckItem from './check.svg';

export const Advantages = ({ advantages }: IAdvantages) => {
	return (
		<>
			<HTag tag='h2'>Преимущества</HTag>
			{advantages.map((a) => (
				<div key={a._id} className={style.advantage}>
					<CheckItem />
					<div className={style.title}>{a.title}</div>
					<div className={style.vline}></div>
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};
