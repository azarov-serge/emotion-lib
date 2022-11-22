import { UiKitTheme } from '../types';
import { theme as defaultTheme } from '../foodCity';
import { global } from './global';

// Ui-Kit
import { button } from './ui-kit/button';
import { divider } from './ui-kit/divider';
import { title } from './ui-kit/title';
// Components
import { productCard } from './components/productCard';

export const theme: UiKitTheme = {
	...defaultTheme,
	global,
	// Ui-Kit
	button,
	divider,
	title,
	// Components
	productCard,
};
