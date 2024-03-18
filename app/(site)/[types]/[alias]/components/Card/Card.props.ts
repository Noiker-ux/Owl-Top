import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface ICard
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color: 'white' | 'blue';
	children: ReactNode;
}
