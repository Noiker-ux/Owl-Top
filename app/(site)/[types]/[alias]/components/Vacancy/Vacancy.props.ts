import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface IVacancy
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	category: string;
	countVacancy?: number;
	juniorSalary?: number;
	middleSalary?: number;
	seniorSalary?: number;
}
