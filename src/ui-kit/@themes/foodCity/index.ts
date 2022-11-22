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
import { message } from './ui-kit/message';
import { modal } from './ui-kit/modal';
import { radio } from './ui-kit/radio';
import { segmentedPicker } from './ui-kit/segmentedPicker';
import { select } from './ui-kit/select';
import { stepper } from './ui-kit/stepper';
import { switcher } from './ui-kit/switcher';
import { systemModal } from './ui-kit/systemModal';
import { priceText } from './ui-kit/priceText';
import { text } from './ui-kit/text';
import { title } from './ui-kit/title';
import { tabBar } from './ui-kit/tabBar';

// Components
import { amount } from './components/amount';
import { checkboxRow } from './components/checkboxRow';
import { info } from './components/info';
import { infoRow } from './components/infoRow';
import { navBar } from './components/navBar';
import { productCard } from './components/productCard';
import { spinner } from './components/spinner';
import { switcherRow } from './components/switcherRow';
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
	message,
	modal,
	radio,
	priceText,
	segmentedPicker,
	select,
	stepper,
	switcher,
	systemModal,
	text,
	title,
	tabBar,
	// Components
	amount,
	checkboxRow,
	info,
	infoRow,
	navBar,
	productCard,
	spinner,
	switcherRow,
	titleRow,
	textRow,
};
