'use client';

import { createContext, PropsWithChildren, useContext } from 'react';
import { MenuItem } from '@/interfaces/menu.interface';

type TMenuContextValues = {
	firstLvlIndex: number;
	secondMenuIndex: number;
	firstLevelMenu: MenuItem[];
};

const MenuContext = createContext<TMenuContextValues>({
	firstLevelMenu: [],
	firstLvlIndex: -1,
	secondMenuIndex: -1,
});

export function MenuProvider({ children, ...data }: PropsWithChildren<TMenuContextValues>) {
	return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
}

export const useMenu = () => useContext(MenuContext);
