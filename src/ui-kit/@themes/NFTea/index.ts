import { UiKitTheme } from '../types';
import { theme as defaultTheme } from '../foodCity'
import { global } from './global';

// Ui-Kit
import { button } from './ui-kit/button';
import { divider } from './ui-kit/divider';
import { title } from './ui-kit/title';

export const theme: UiKitTheme = {
	...defaultTheme,
	global,
	// Ui-Kit
	button,
	divider,
	title,
};
