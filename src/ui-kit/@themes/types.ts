import { SerializedStyles } from '@emotion/react';
import { InputState } from 'ui-kit/base/InputBase/constants';
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

// #region ModalTheme
export interface ModalTheme {
	wrapper: SerializedStyles;
	closeButton: SerializedStyles;
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

// #region NavBarTheme
export interface NavBarTheme {
	centerButton: SerializedStyles;
	caption: SerializedStyles;
	iconWrapper: SerializedStyles;
	title: SerializedStyles;
}
// #region

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
	modal: ModalTheme;
	segmentedPicker: SegmentedPickerTheme;
	tabBar: TabBarTheme;
	text: TextTheme;
	title: TitleTheme;
	priceText: PriceTextTheme;
	// Components
	amount: AmountTheme;
	checkboxRow: CheckboxRowTheme;
	navBar: NavBarTheme;
	spinner: SerializedStyles;
	titleRow: TitleRowTheme;
	textRow: TextRowTheme;
}
