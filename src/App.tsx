import React from 'react';
import { Provider as MOBXProvider } from 'mobx-react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles } from './ui-kit/GlobalStyle';
import { uiKitTheme } from './ui-kit/@themes';
import { DemoPage } from './pages';
import * as baseStores from './ui-kit/base/stores';
import { Messages } from './ui-kit/Message';

export const App = () => {
	
	return (
		<ThemeProvider theme={uiKitTheme.foodCity}>
        <MOBXProvider {...baseStores}>
          <DemoPage />
          <GlobalStyles />
          <Messages />
        </MOBXProvider>
      </ThemeProvider>
	);
};
