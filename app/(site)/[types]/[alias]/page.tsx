import { getDetail, getMenu, getProduct } from '@/api/api';
import { TopPage } from './components/TopPage/TopPage';
import style from './page.module.css';
import { Vacancy } from './components/Vacancy/Vacancy';
import { Advantages } from './components/Advantages/Advantages';
import { Skills } from './components/Skills/Skills';

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap((item) => item.pages.map((p) => ({ alias: p.alias })));
}

export default async function Section({ params }: { params: { alias: string } }) {
	const detail = await getDetail(params.alias);
	const product = await getProduct(detail.category);

	return (
		<div className={style.main}>
			<TopPage products={product} title={detail.title} />
			{detail.firstCategory === 0 && detail.hh && (
				<Vacancy
					category={detail.category}
					countVacancy={detail.hh?.count}
					juniorSalary={detail.hh?.juniorSalary}
					middleSalary={detail.hh?.middleSalary}
					seniorSalary={detail.hh?.seniorSalary}
				/>
			)}
			{detail.advantages && detail.advantages.length > 0 && (
				<Advantages advantages={detail.advantages} />
			)}
			{detail.seoText && (
				<div className={style.seo} dangerouslySetInnerHTML={{ __html: detail.seoText }} />
			)}
			{detail.tags && <Skills tags={detail.tags} />}
		</div>
	);
}
