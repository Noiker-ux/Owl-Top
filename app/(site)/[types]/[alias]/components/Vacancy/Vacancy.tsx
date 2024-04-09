import { HTag, Tag } from '@/components';
import style from './Vacancy.module.css';
import IVacancy from './Vacancy.props';
import { Card } from '../Card/Card';
import RateIcon from './VacancyRating.svg';
import PriceRu from '@/utils/priceRu';
import classNames from 'classnames';

export const Vacancy = ({
	category,
	countVacancy,
	juniorSalary,
	middleSalary,
	seniorSalary,
	className,
	...props
}: IVacancy) => {
	return (
		<div className={classNames(style.hhwrapper, className)} {...props}>
			<div className={style.hhtitle}>
				<HTag tag='h2'>Вакансии - {category}</HTag>
				<Tag color='red' size='small' className={style.tag}>
					hh.ru
				</Tag>
			</div>
			<div className={style.hh}>
				{countVacancy && (
					<Card color='white' className={style.hhcount}>
						<div className={style.title}>Всего вакансий</div>
						<div className={style.hhCount}>{PriceRu(countVacancy)}</div>
					</Card>
				)}
				{juniorSalary && middleSalary && seniorSalary && (
					<Card color='white' className={style.salary}>
						<div>
							<div className={style.title}>Начальный</div>
							<div className={style.salaryValue}>{PriceRu(juniorSalary)}</div>
							<div className={style.rate}>
								<RateIcon className={style.filled} />
								<RateIcon />
								<RateIcon />
							</div>
						</div>
						<div>
							<div className={style.title}>Средний</div>
							<div className={style.salaryValue}>{PriceRu(middleSalary)}</div>
							<div className={style.rate}>
								<RateIcon className={style.filled} />
								<RateIcon className={style.filled} />
								<RateIcon />
							</div>
						</div>
						<div>
							<div className={style.title}>Профессионал</div>
							<div className={style.salaryValue}>{PriceRu(seniorSalary)}</div>
							<div className={style.rate}>
								<RateIcon className={style.filled} />
								<RateIcon className={style.filled} />
								<RateIcon className={style.filled} />
							</div>
						</div>
					</Card>
				)}
			</div>
		</div>
	);
};
