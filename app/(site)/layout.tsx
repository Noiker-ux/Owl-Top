import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import style from './layout.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Metadata } from 'next';

const NotoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Title',
	description: 'desc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body className={NotoSans.className}>
				<div className={style.wrapper}>
					<Header className={style.header} />
					<Sidebar className={style.sidebar} />
					<div className={style.body}>{children}</div>
					<Footer className={style.footer} />
				</div>
			</body>
		</html>
	);
}
