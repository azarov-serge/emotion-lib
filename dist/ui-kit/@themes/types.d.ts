import { SerializedStyles } from '@emotion/react';
import { ButtonSize, ButtonType } from '../Button';
import { PriceTextSize, TextSize } from '../Typography';
export declare type ButtonTypeTheme = Record<ButtonType, SerializedStyles> & {
    loading: Record<ButtonType, SerializedStyles>;
    default: SerializedStyles;
    disabled: SerializedStyles;
};
export declare type ButtonTheme = Record<ButtonSize, ButtonTypeTheme> & {
    spin: Record<ButtonType, SerializedStyles>;
};
export interface TabBarTheme {
    wrapper: SerializedStyles;
    tab: SerializedStyles;
    tabHover: SerializedStyles;
    tabActive: SerializedStyles;
    tabIsActive: SerializedStyles;
    notification: SerializedStyles;
    activeState: SerializedStyles;
}
export interface TitleTheme {
    h1: SerializedStyles;
    h2: SerializedStyles;
    h3: SerializedStyles;
    h4: SerializedStyles;
}
export declare type TextTheme = Record<TextSize, SerializedStyles>;
export declare type PriceTextTheme = Record<PriceTextSize, SerializedStyles>;
export interface UiKitTheme {
    global: SerializedStyles;
    button: ButtonTheme;
    tabBar: TabBarTheme;
    text: TextTheme;
    title: TitleTheme;
    priceText: PriceTextTheme;
}
