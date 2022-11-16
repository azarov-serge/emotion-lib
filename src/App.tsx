import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { Paper, Button } from './ui-kit';
import { uiKitTheme } from './ui-kit/theme';

export const App = () => {
	return (
		<ThemeProvider theme={uiKitTheme.BLUE_THEME}>
			<Paper>
				<Button>Primary</Button>
				<Button kind="secondary">Secondary</Button>
			</Paper>
		</ThemeProvider>
	);
};
