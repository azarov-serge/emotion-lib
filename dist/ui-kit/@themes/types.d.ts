import { SerializedStyles } from '@emotion/react';
import { InputState } from 'ui-kit/base/InputBase/constants';
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
export declare type ElementInputBaseTheme = Record<InputState, SerializedStyles>;
export interface InputBaseTheme {
    label: SerializedStyles;
    message: ElementInputBaseTheme;
    input: ElementInputBaseTheme;
}
export interface InputTheme {
    button: {
        default: SerializedStyles;
        disabled: SerializedStyles;
    };
}
export interface ModalTheme {
    wrapper: SerializedStyles;
    closeButton: SerializedStyles;
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
export interface NavBarTheme {
    centerButton: SerializedStyles;
    caption: SerializedStyles;
    iconWrapper: SerializedStyles;
    title: SerializedStyles;
}
export interface TitleRowTheme {
    row: SerializedStyles;
    title: SerializedStyles;
}
export interface TextRowTheme {
    row: {
        default: SerializedStyles;
        disabled: SerializedStyles;
    };
    description: SerializedStyles;
}
export interface UiKitTheme {
    global: SerializedStyles;
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
    amount: AmountTheme;
    checkboxRow: CheckboxRowTheme;
    navBar: NavBarTheme;
    spinner: SerializedStyles;
    titleRow: TitleRowTheme;
    textRow: TextRowTheme;
}
