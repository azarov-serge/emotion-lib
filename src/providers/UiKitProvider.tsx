import React, { FC, ReactNode } from 'react';
import { Provider as MOBXProvider } from 'mobx-react';
import { ThemeProvider, Theme } from '@emotion/react';
import * as baseStores from '../ui-kit/base/stores';
import { GlobalStyle } from '../ui-kit';

export interface UiKitProviderProps {
	theme: Theme;
	children: ReactNode;
}

export const UiKitProvider: FC<UiKitProviderProps> = (props) => {
	const { theme, children } = props;
	return (
		<ThemeProvider theme={theme}>
			<MOBXProvider {...baseStores}>
				{children}
				<GlobalStyle />
			</MOBXProvider>
		</ThemeProvider>
	);
};