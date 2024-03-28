'use client';
import { ISearchProps } from './Search.props';
import style from './Search.module.css';
import classNames from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '..';
import { KeyboardEvent, useState } from 'react';
import SearchIcon from './Search.svg';
import { useRouter } from 'next/navigation';

export const Search = ({ className, ...props }: ISearchProps) => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push(`/search?q=${search}`);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={classNames(style.search, className)} {...props}>
			<Input
				className={style.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button onClick={goToSearch} className={style.button} appereance='primary'>
				<SearchIcon />
			</Button>
		</div>
	);
};
