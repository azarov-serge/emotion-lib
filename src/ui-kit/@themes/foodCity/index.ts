import { UiKitTheme } from '../types';
import { global } from './global';

// Ui-Kit
import { button } from './ui-kit/button';
import { checkbox } from './ui-kit/checkbox';
import { dialog } from './ui-kit/dialog';
import { divider } from './ui-kit/divider';
import { drawer } from './ui-kit/drawer';
import { inputBase } from './ui-kit/inputBase';
import { input } from './ui-kit/input';
import { modal } from './ui-kit/modal';
import { segmentedPicker } from './ui-kit/segmentedPicker';
import { priceText } from './ui-kit/priceText';
import { text } from './ui-kit/text';
import { title } from './ui-kit/title';
import { tabBar } from './ui-kit/tabBar';

// Components
import { amount } from './components/amount';
import { checkboxRow } from './components/checkboxRow';
import { navBar } from './components/navBar';
import { spinner } from './components/spinner';
import { titleRow } from './components/titleRow';
import { textRow } from './components/textRow';

export const theme: UiKitTheme = {
	global,
	// Ui-Kit
	button,
	checkbox,
	dialog,
	divider,
	drawer,
	inputBase,
	input,
	modal,
	priceText,
	segmentedPicker,
	text,
	title,
	tabBar,
	// Components
	amount,
	checkboxRow,
	navBar,
	spinner,
	titleRow,
	textRow,
};
