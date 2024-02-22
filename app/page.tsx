import styles from './page.module.css';
import { Button, HTag, Paragraph, Tag } from '../components';

export default function Home(): JSX.Element {
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
		</main>
	);
}
