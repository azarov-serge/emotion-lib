import { UiKitTheme } from '../types';
import { global } from './global';

// Ui-Kit
import { priceText } from './ui-kit/priceText';
import { text } from './ui-kit/text';
import { title } from './ui-kit/title';
import { tabBar } from './ui-kit/tabBar';

export const theme: UiKitTheme = {
	global,
	// Ui-Kit
	priceText,
	text,
	title,
	tabBar,
};
