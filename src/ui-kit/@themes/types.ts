import { SerializedStyles } from '@emotion/react';
import { ButtonSize, ButtonType } from '../Button';
import { PriceTextSize, TextSize } from '../Typography';

// #region ButtonTheme
export type ButtonTypeTheme = Record<ButtonType, SerializedStyles> & {
	loading: Record<ButtonType, SerializedStyles>;
	default: SerializedStyles;
	disabled: SerializedStyles;
};

export type ButtonTheme = Record<ButtonSize, ButtonTypeTheme> & {
	spin: Record<ButtonType, SerializedStyles>;
};
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

// #region TextStyle
export type PriceTextTheme = Record<PriceTextSize, SerializedStyles>;
// #endregion
export interface UiKitTheme {
	global: SerializedStyles;
	// Ui-Kit
	button: ButtonTheme;
	tabBar: TabBarTheme;
	text: TextTheme;
	title: TitleTheme;
	priceText: PriceTextTheme;
}
