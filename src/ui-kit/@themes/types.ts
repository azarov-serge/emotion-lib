import { SerializedStyles } from '@emotion/react';
import { PriceTextSize, TextSize } from '../Typography';

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
	tabBar: TabBarTheme;
	text: TextTheme;
	title: TitleTheme;
	priceText: PriceTextTheme;
}
