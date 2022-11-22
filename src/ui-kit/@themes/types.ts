import { SerializedStyles } from '@emotion/react';
import { ProductCardType } from 'components';
import { InfoType } from '../../components/Info';
import { ComponentSize } from '../@types';
import { InputState } from '../base/InputBase/constants';
import { ButtonSize, ButtonKind } from '../Button';
import { PriceTextSize, TextSize } from '../Typography';

// Ui-Kit
// #region ButtonTheme
export type ButtonKindTheme = Record<ButtonKind, SerializedStyles> & {
	loading: Record<ButtonKind, SerializedStyles>;
	default: SerializedStyles;
	disabled: SerializedStyles;
};

export type ButtonTheme = Record<ButtonSize, ButtonKindTheme> & {
	spin: Record<ButtonKind, SerializedStyles>;
};
// #endregion

// #region CheckboxTheme
export interface CheckboxElementTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
	checked: SerializedStyles;
	error: SerializedStyles;
}

export interface CheckboxTickTheme {
	default: SerializedStyles;
	disabledChecked: SerializedStyles;
	error: SerializedStyles;
}

export interface CheckboxTheme {
	label: CheckboxElementTheme;
	tick: CheckboxTickTheme;
	box: CheckboxElementTheme;
}
// #endregion

// #region DialogTheme
export interface DialogTheme {
	default: SerializedStyles;
	opened: SerializedStyles;
}
// #endregion

// #region InputBaseTheme
export type ElementInputBaseTheme = Record<InputState, SerializedStyles>;
export interface InputBaseTheme {
	label: SerializedStyles;
	message: ElementInputBaseTheme;
	input: ElementInputBaseTheme;
}
// #endregion

// #region InputTheme
export interface InputTheme {
	button: {
		default: SerializedStyles;
		disabled: SerializedStyles;
	};
}
// #endregion

// #region MessageTheme
export interface MessageTheme {
	wrapper: SerializedStyles;
	text: SerializedStyles;
}
// #endregion

// #region ModalTheme
export interface ModalTheme {
	wrapper: SerializedStyles;
	closeButton: SerializedStyles;
}
// #endregion

// #region RadioTheme
export interface LabelRadioTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
	error: SerializedStyles;
}

export interface DotRadioTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
	checked: SerializedStyles;
	error: SerializedStyles;
}

export interface RadioTheme {
	label: LabelRadioTheme;
	dot: DotRadioTheme;
}
// #endregion

// #region SegmentPickerTheme
export interface OptionSegmentedPickerTheme {
	label: SerializedStyles;
	text: {
		default: SerializedStyles;
		checked: SerializedStyles;
		disabled: SerializedStyles;
	};
	spinner: SerializedStyles;
}

export interface SegmentedPickerTheme {
	option: OptionSegmentedPickerTheme;
	default: SerializedStyles;
}
// #endregion

// #region SelectTheme
interface ToggleSelectTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
}

interface OptionsSelectTheme {
	default: SerializedStyles;
}

interface OptionSelectTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
	selected: SerializedStyles;
}

interface NoDataSelectTheme {
	default: SerializedStyles;
}

interface SpinnerSelectTheme {
	default: SerializedStyles;
}

export interface SelectTheme {
	toggle: ToggleSelectTheme;
	options: OptionsSelectTheme;
	option: OptionSelectTheme;
	noData: NoDataSelectTheme;
	spinner: SpinnerSelectTheme;
}
// #endregion

// #region StepperTheme
export interface ButtonStepperTheme {
	default: SerializedStyles;
	loading: SerializedStyles;
	disabled: SerializedStyles;
}
export interface StepperTheme {
	wrapper: Record<ComponentSize, SerializedStyles>;
	spinner: SerializedStyles;
	button: ButtonStepperTheme;
}
// #endregion

// #region SwitcherTheme
export interface SpinnerSwitcherTheme {
	default: SerializedStyles;
	checked: SerializedStyles;
}

export interface KnobSwitcherTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
	disabledChecked: SerializedStyles;
}

export interface LabelSwitcherTheme {
	default: SerializedStyles;
	checked: SerializedStyles;
	disabled: SerializedStyles;
	disabledChecked: SerializedStyles;
}

export interface TextSwitcherTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
}

export interface SwitcherTheme {
	spinner: SpinnerSwitcherTheme;
	knob: KnobSwitcherTheme;
	label: LabelSwitcherTheme;
	text: TextSwitcherTheme;
}
// #endregion

// #region SystemModalTheme
export interface SystemModalTheme {
	container: SerializedStyles;
	title: SerializedStyles;
	text: SerializedStyles;
	action: SerializedStyles;
}
// #endregion

// #region TabBarTheme
export interface TabBarTheme {
	wrapper: SerializedStyles;
	tab: SerializedStyles;
	tabHover: SerializedStyles;
	tabActive: SerializedStyles;
	tabIsActive: SerializedStyles;
	notification: SerializedStyles;
	activeState: SerializedStyles;
}
// #endregion

// #region TitleTheme
export interface TitleTheme {
	h1: SerializedStyles;
	h2: SerializedStyles;
	h3: SerializedStyles;
	h4: SerializedStyles;
}
// #endregion

// #region TextTheme
export type TextTheme = Record<TextSize, SerializedStyles>;
// #endregion

// #region PriceTextTheme
export type PriceTextTheme = Record<PriceTextSize, SerializedStyles>;
// #endregion

// Components
// #region AmountTheme
export interface AmountTheme {
	wrapper: {
		disabled: SerializedStyles;
	};
	oldValue: SerializedStyles;
}
// #endregion

// #region CheckboxRowTheme
export interface RowCheckboxRowTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
	error: SerializedStyles;
}

export interface PriceCheckboxRowTheme {
	default: SerializedStyles;
	disabled: SerializedStyles;
}
export interface CheckboxRowTheme {
	row: RowCheckboxRowTheme;
	price: PriceCheckboxRowTheme;
}
// #endregion

// #region InfoTheme
export interface InfoTheme {
	row: Record<keyof typeof InfoType, SerializedStyles>;
	title: SerializedStyles;
	description: SerializedStyles;
	infoBox: Record<keyof typeof InfoType, SerializedStyles>;
}
// #endregion

// #region InfoRowTheme
export interface InfoRowTheme {
	row: {
		default: SerializedStyles;
		disabled: SerializedStyles;
	};
	iconBox: SerializedStyles;
	description: SerializedStyles;
}
// #endregion

// #region NavBarTheme
export interface NavBarTheme {
	centerButton: SerializedStyles;
	caption: SerializedStyles;
	iconWrapper: SerializedStyles;
	title: SerializedStyles;
}
// #endregion

// #region ProductCard
export type ProductCardWrapperTheme = Record<ProductCardType, SerializedStyles>;

export type ProductCardImgTheme = SerializedStyles;

export type ProductCardShadowTheme = Record<ProductCardType, SerializedStyles>;

export type ProductCardTextTheme = Record<ProductCardType, SerializedStyles>;

export type ProductCardSubTextTheme = SerializedStyles;

export type ProductCardSeparatorTheme = SerializedStyles;

export type ProductCardCloseButtonTheme = SerializedStyles;

export interface ProductCardTheme {
	wrapper: ProductCardWrapperTheme;
	img: ProductCardImgTheme;
	shadow: ProductCardShadowTheme;
	text: ProductCardTextTheme;
	subText: ProductCardSubTextTheme;
	separator: ProductCardSeparatorTheme;
	closeButton: ProductCardCloseButtonTheme;
}
// #endregion

// #region SwitcherRowTheme
export interface SwitcherRowTheme {
	row: {
		default: SerializedStyles;
		disabled: SerializedStyles;
	};
	description: SerializedStyles;
}
// #endregion

// #region TitleRowTheme
export interface TitleRowTheme {
	row: SerializedStyles;
	title: SerializedStyles;
}
// #endregion

// #region TitleRowTheme
export interface TextRowTheme {
	row: {
		default: SerializedStyles;
		disabled: SerializedStyles;
	};
	description: SerializedStyles;
}
// #endregion

export interface UiKitTheme {
	global: SerializedStyles;
	// Ui-Kit
	button: ButtonTheme;
	checkbox: CheckboxTheme;
	dialog: DialogTheme;
	divider: SerializedStyles;
	drawer: SerializedStyles;
	inputBase: InputBaseTheme;
	input: InputTheme;
	message: MessageTheme;
	modal: ModalTheme;
	radio: RadioTheme;
	segmentedPicker: SegmentedPickerTheme;
	select: SelectTheme;
	stepper: StepperTheme;
	switcher: SwitcherTheme;
	systemModal: SystemModalTheme;
	tabBar: TabBarTheme;
	text: TextTheme;
	title: TitleTheme;
	priceText: PriceTextTheme;
	// Components
	amount: AmountTheme;
	checkboxRow: CheckboxRowTheme;
	info: InfoTheme;
	infoRow: InfoRowTheme;
	navBar: NavBarTheme;
	productCard: ProductCardTheme;
	spinner: SerializedStyles;
	switcherRow: SwitcherRowTheme;
	titleRow: TitleRowTheme;
	textRow: TextRowTheme;
}
