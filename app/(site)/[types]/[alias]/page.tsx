
import { getMenu } from '@/api/api';
import { AppContext } from '@/context/app.context';
import { notFound } from 'next/navigation';
import { useContext } from 'react';

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap((item) => item.pages.map((p) => ({ alias: p.alias })));
}

export default function Section({ params }: { params: { alias: string } }) {

	return <>{params.alias}</>;
}
