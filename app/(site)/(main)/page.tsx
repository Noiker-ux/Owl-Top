'use client';
import styles from './page.module.css';
import { Button, HTag, Paragraph, Rating, Tag } from '../../../components';
import { useState } from 'react';
import { API } from '@/app/api';
import { MenuItem } from '@/interfaces/menu.interface';

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.find, {
		method: 'POST',
		body: JSON.stringify({
			firstCategory,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}

export default async function Home() {
	const [rating, setRating] = useState<number>(4);
	const menu = await getMenu(0);
	return (
		<main className={styles.main}>
			<HTag tag='h1'>Текст</HTag>
			<Button appereance='primary' arrow='down'>
				Кнопка
			</Button>
			<Button appereance='ghost' arrow='right'>
				Кнопка
			</Button>
			<Paragraph size='big'>Большой</Paragraph>
			<Tag size='small'>Мал</Tag>
			<Tag size='medium' color='green'>
				Маленький
			</Tag>
			<Tag size='medium' color='red'>
				red
			</Tag>
			<Tag size='medium' color='primary'>
				primary
			</Tag>
			<Rating rating={rating} setRating={setRating} isEditable={true} />
			<div>
				<div>{JSON.stringify(menu)}</div>
			</div>
		</main>
	);
}
