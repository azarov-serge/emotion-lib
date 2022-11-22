import React, { FC, ReactNode } from 'react';
import { ThemeProvider, Theme } from '@emotion/react';
import { GlobalStyle } from '../ui-kit';
import { Messages } from '../ui-kit/Message/Messages';
import { ModalProvider, MessageProvider } from '../contexts';

export interface UiKitProviderProps {
	theme: Theme;
	children: ReactNode;
}

export const UiKitProvider: FC<UiKitProviderProps> = (props) => {
	const { theme, children } = props;
	return (
		<ThemeProvider theme={theme}>
			<ModalProvider>
				<MessageProvider>
					{children}
					<Messages />
					<GlobalStyle />
				</MessageProvider>
			</ModalProvider>
		</ThemeProvider>
	);
};
