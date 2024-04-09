import IReviewFormProps from './ReviewForm.props';
import classNames from 'classnames';
import style from './ReviewForm.module.css';
import { Button, Input, Rating, TextArea } from '@/components';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import IReviewForm, { IReviewResponcee } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '@/api/api.links';
import { useState } from 'react';

export const ReviewForm = ({ productId, className, ...props }: IReviewFormProps) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IReviewForm>({});
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setIsError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewResponcee>(API.review.createDemo, {
				...formData,
				productId,
			});
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setIsError('Что-то пошло не так');
			}
		} catch (e) {
			setIsError(`Ошибка`);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={classNames(style.reviewForm, className)} {...props}>
				<Input
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
					placeholder='Имя'
					error={errors.name}
				/>
				<Input
					{...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
					placeholder='Заголовок отзыва'
					className={style.title}
					error={errors.title}
				/>
				<div className={style.rating}>
					<span>Оценка:</span>
					<Controller
						name='rating'
						rules={{ required: { value: true, message: 'Поставьте оценку' } }}
						control={control}
						render={({ field }) => (
							<Rating
								isEditable
								error={errors.rating}
								ref={field.ref}
								setRating={field.onChange}
								rating={field.value}
							/>
						)}
					/>
				</div>
				<TextArea
					{...register('description', {
						required: { value: true, message: 'Заполните текст отзыва' },
					})}
					placeholder='Текст отзыва'
					className={style.description}
					error={errors.description}
				/>
				<div className={style.submit}>
					<Button appereance='primary'>Отправить</Button>
					<span className={style.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={classNames(style.panel, style.success)}>
					<div className={style.successTitle}>Ваш отзыв успешно отправлен</div>
					<div>Спасибо, ваш отзыв будет опублткован после проверки.</div>
					<CloseIcon className={style.close} onClick={() => setIsSuccess(false)} />
				</div>
			)}
			{error && (
				<div className={classNames(style.panel, style.error)}>
					Что-то пошло не так попробуйте заново
					<CloseIcon className={style.close} onClick={() => setIsError(undefined)} />
				</div>
			)}
		</form>
	);
};
