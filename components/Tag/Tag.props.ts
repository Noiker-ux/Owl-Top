import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface ITagProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
	size?: 'small' | 'medium';
}
