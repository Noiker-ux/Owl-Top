import { getMenu, getPage } from '@/api/api';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap((item) => item.pages.map((p) => ({ alias: p.alias })));
}

export default async function Section({ params }: { params: { alias: string } }) {
	return <>{params.alias}</>;
}
