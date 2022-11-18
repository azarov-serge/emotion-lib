import { SerializedStyles } from '@emotion/react';
import { ButtonSize, ButtonKind } from '../Button';
import { PriceTextSize, TextSize } from '../Typography';
export declare type ButtonKindTheme = Record<ButtonKind, SerializedStyles> & {
    loading: Record<ButtonKind, SerializedStyles>;
    default: SerializedStyles;
    disabled: SerializedStyles;
};
export declare type ButtonTheme = Record<ButtonSize, ButtonKindTheme> & {
    spin: Record<ButtonKind, SerializedStyles>;
};
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
export interface DialogTheme {
    default: SerializedStyles;
    opened: SerializedStyles;
}
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
export interface AmountTheme {
    wrapper: {
        disabled: SerializedStyles;
    };
    oldValue: SerializedStyles;
}
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
export interface UiKitTheme {
    global: SerializedStyles;
    button: ButtonTheme;
    checkbox: CheckboxTheme;
    dialog: DialogTheme;
    divider: SerializedStyles;
    drawer: SerializedStyles;
    segmentedPicker: SegmentedPickerTheme;
    tabBar: TabBarTheme;
    text: TextTheme;
    title: TitleTheme;
    priceText: PriceTextTheme;
    amount: AmountTheme;
    checkboxRow: CheckboxRowTheme;
}
