import { SerializedStyles } from '@emotion/react';
import { PriceTextSize, TextSize } from '../Typography';
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
    tabBar: TabBarTheme;
    text: TextTheme;
    title: TitleTheme;
    priceText: PriceTextTheme;
}
