import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export default interface ITextAreaProps
	extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	error?: FieldError;
}
