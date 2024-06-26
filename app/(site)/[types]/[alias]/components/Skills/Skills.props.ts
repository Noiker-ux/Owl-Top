import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ISkills
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tags: string[];
}
