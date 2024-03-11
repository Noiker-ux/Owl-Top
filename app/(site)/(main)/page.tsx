'use client';
import styles from './page.module.css';
import { Button, HTag, Paragraph, Rating, Tag } from '../../../components';
import { useState } from 'react';

export default async function Home() {
	const [rating, setRating] = useState<number>(4);

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
		</main>
	);
}
