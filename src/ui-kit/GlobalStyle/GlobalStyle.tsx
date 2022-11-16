import React from 'react';
import { useTheme, Global } from '@emotion/react';
import { UiKitTheme } from '../@themes/types';

export const GlobalStyle = () => {
  const theme = useTheme() as UiKitTheme;

  return <Global styles={theme.global} />;
};
