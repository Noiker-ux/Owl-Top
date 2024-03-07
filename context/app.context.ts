import { ReactNode, createContext } from 'react';

export const AppContextMeny = createContext({});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	return <AppContext.Provider>{children}</AppContext.Provider>;
};
