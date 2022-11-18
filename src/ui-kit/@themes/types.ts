import { SerializedStyles } from '@emotion/react';
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
// #region PriceTextTheme
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

export interface UiKitTheme {
	global: SerializedStyles;
	// Ui-Kit
	button: ButtonTheme;
	checkbox: CheckboxTheme;
	tabBar: TabBarTheme;
	text: TextTheme;
	title: TitleTheme;
	priceText: PriceTextTheme;

	// Components
	checkboxRow: CheckboxRowTheme;
}
