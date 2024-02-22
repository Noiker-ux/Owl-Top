import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const NotoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Наш проект',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang='ru'>
			<body className={NotoSans.className}>{children}</body>
		</html>
	);
}
