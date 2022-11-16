import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { Title, GlobalStyle } from './ui-kit';
import { uiKitTheme } from './ui-kit/@themes';

export const App = () => {
	return (
		<ThemeProvider theme={uiKitTheme.NFTea}>
			<Title>H1</Title>
			<Title level={2}>H2</Title>
			<Title level={4}>H3</Title>
			<Title level={4}>H4</Title>
			<GlobalStyle />
		</ThemeProvider>
	);
};
