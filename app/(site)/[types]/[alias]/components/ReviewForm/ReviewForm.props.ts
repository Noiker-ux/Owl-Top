import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface IReviewFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productId: string;
}
