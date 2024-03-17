'use client';

import { createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';
import { MenuItem } from '../../../../interfaces/menu.interface';

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

function MenuProvider({ children, ...data }: PropsWithChildren<TMenuContextValues>) {
	return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
}

const useMenu = () => useContext(MenuContext);

export { MenuProvider, useMenu };
