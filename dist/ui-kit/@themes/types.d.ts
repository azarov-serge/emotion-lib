import { CSSObject, SerializedStyles } from '@emotion/react';
import { ButtonType } from '@/ui-kit/Button';
import { InfoType, ProductCardType } from '@/components';
import { ComponentSize } from '../@types';
import { InputState } from '../base/InputBase/constants';
declare type OverwriteStyles = {
    styles?: CSSObject;
};
declare type ButtonTypeTheme = Record<ButtonType, {
    normal: {
        color: string;
        backgroundColor: string;
        borderColor: string;
    };
    loading: {
        color: string;
        backgroundColor: string;
        borderColor: string;
    };
    hover: {
        color: string;
        backgroundColor: string;
        borderColor: string;
    };
    active: {
        color: string;
        backgroundColor: string;
        borderColor: string;
    };
}>;
export declare type ButtonSpinTheme = Record<ButtonType, {
    border: {
        color: string;
    };
    borderLeft: {
        color: string;
    };
}>;
export interface ButtonTheme extends ButtonTypeTheme, OverwriteStyles {
    fontFamily: string;
    disabled: {
        color: string;
        backgroundColor: string;
        borderColor: string;
    };
    spin: ButtonSpinTheme;
    [ComponentSize.small]: {
        [ButtonType.danger]: {
            hover: {
                color: string;
            };
            disabled: {
                color: string;
            };
        };
        [ButtonType.ghost]: {
            normal: {
                borderColor: string;
            };
        };
    };
}
export interface CheckBoxLabelTheme {
    borderColor: {
        disabled: string;
        checked: string;
        error: string;
        normal: string;
    };
    color: {
        disabled: string;
        error: string;
        normal: string;
    };
}
export interface CheckBoxBoxTheme {
    bgColor: {
        disabled: string;
        checked: string;
        error: string;
        normal: string;
    };
    tickColor: {
        error: string;
        disabledChecked: string;
        normal: string;
    };
    indeterminateColor: {
        disabled: string;
        error: string;
        normal: string;
    };
}
export interface CheckBoxTheme {
    label: CheckBoxLabelTheme;
    box: CheckBoxBoxTheme;
}
export interface DividerTheme {
    bgColor: string;
}
export interface DrawerTheme {
    bg: string;
}
export declare type InputBaseMessage = Record<InputState, {
    color: string;
}>;
export interface InputBaseLabelTheme extends OverwriteStyles {
    color: string;
    requiredColor: string;
    fontFamily: string;
}
export declare type InputBaseInputTheme = {
    fontFamily: string;
} & Record<InputState, {
    color: string;
    borderColor: string;
    bg: string;
    placeholderColor: string;
    hover: {
        backgroundColor: string;
        bg: string;
    };
    focus: {
        color: string;
        bg: string;
    };
} & OverwriteStyles>;
export interface InputBaseTheme {
    input: InputBaseInputTheme;
    label: InputBaseLabelTheme;
    message: InputBaseMessage;
}
export interface ModalTheme {
    bg: string;
    buttonFill: string;
}
export interface SegmentedPickerOptionTheme {
    label: {
        bg: string;
    };
    spinner: {
        stroke: string;
    };
    text: {
        color: string;
        disabled: {
            color: string;
        };
        hover: {
            color: string;
            bg: string;
            bgChecked: string;
        };
        active: {
            color: string;
            bg: string;
            bgChecked: string;
        };
    };
}
export interface SegmentedPickerTheme {
    bg: string;
    option: SegmentedPickerOptionTheme;
}
export interface SelectsToggleTheme {
    color: string;
    disabledColor: string;
}
export interface SelectsOptionsTheme {
    bg: string;
}
export interface SelectsNoDataTheme {
    bg: string;
}
export interface SelectsOptionTheme {
    color: string;
    bg: string;
    disabled: {
        color: string;
    };
    hover: {
        bg: string;
    };
    active: {
        bg: string;
    };
    selected: {
        bg: string;
    };
}
export interface SelectsSpinnerTheme {
    stroke: string;
}
export interface SelectsTheme {
    toggle: SelectsToggleTheme;
    options: SelectsOptionsTheme;
    option: SelectsOptionTheme;
    noData: SelectsNoDataTheme;
    spinner: SelectsSpinnerTheme;
}
export interface StepperButtonTheme {
    color: string;
    bg: string;
    loading: {
        bg: string;
    };
    disabled: {
        color: string;
    };
    hover: {
        color: string;
    };
    active: {
        color: string;
        bg: string;
    };
}
export interface StepperTheme {
    wrapper: {
        border: {
            color: string;
        };
    };
    spinner: {
        stroke: string;
    };
    button: StepperButtonTheme;
}
export interface SwitcherSpinnerTheme {
    stroke: string;
    path: {
        stroke: string;
        checkedStoke: string;
    };
}
export interface SwitcherKnobTheme {
    bg: string;
    disabled: {
        bg: string;
        checked: {
            bg: string;
        };
    };
}
export interface SwitcherLabelTheme {
    bg: string;
    checked: {
        bg: string;
    };
    disabled: {
        bg: string;
        checked: {
            bg: string;
        };
    };
}
export interface SwitcherTheme {
    spinner: SwitcherSpinnerTheme;
    knob: SwitcherKnobTheme;
    label: SwitcherLabelTheme;
}
export interface TitleTheme {
    color: string;
}
export interface AmountTheme {
    disabled: {
        color: string;
        bg: string;
    };
    oldValue: {
        color: string;
    };
}
export interface CheckBoxRowRowTheme {
    normal: {
        color: string;
        bg: string;
    };
    error: {
        bg: string;
    };
    disabled: {
        color: string;
    };
}
export interface CheckBoxRowPriceTheme {
    normal: {
        bg: string;
    };
    disabled: {
        bg: string;
    };
}
export interface CheckBoxRowTheme {
    row: CheckBoxRowRowTheme;
    price: CheckBoxRowPriceTheme;
}
export interface TabBarWrapperTheme {
    color: string;
    bg: string;
}
export interface TabBarTabTheme {
    color: string;
    activeColor: string;
    notification: {
        color: string;
        bg: string;
    };
    hover: {
        color: string;
    };
    active: {
        color: string;
        bg: string;
    };
}
export interface ActiveStateTheme {
    bg: string;
}
export interface TabBarTheme {
    wrapper: TabBarWrapperTheme;
    tab: TabBarTabTheme;
    activeState: ActiveStateTheme;
}
export interface InfoInfoBoxTheme {
    color: string;
    bg: Record<keyof typeof InfoType, string>;
}
export interface InfoTitleTheme {
    color: string;
}
export interface InfoDescriptionTheme {
    color: string;
}
export interface InfoTheme {
    row: Record<keyof typeof InfoType, string>;
    infoBox: InfoInfoBoxTheme;
    title: InfoTitleTheme;
    description: InfoDescriptionTheme;
}
export interface InfoRowTheme {
    row: {
        color: string;
        disabledColor: string;
    };
    iconBox: {
        color: string;
    };
    description: {
        color: string;
    };
}
export declare type ProductCardWrapperTheme = Record<ProductCardType, {
    bg: string;
    border: string;
}>;
export interface ProductCardImgTheme {
    bg: string;
}
export declare type ProductCardShadowTheme = Record<ProductCardType, {
    color: string;
    bg: string;
}>;
export declare type ProductCardTextTheme = Record<ProductCardType, {
    color: string;
}>;
export interface ProductCardSubTextTheme {
    color: string;
}
export interface ProductCardSeparatorTheme {
    bg: string;
}
export interface ProductCardCloseButtonTheme {
    fill: string;
}
export interface ProductCardTheme {
    wrapper: ProductCardWrapperTheme;
    img: ProductCardImgTheme;
    shadow: ProductCardShadowTheme;
    text: ProductCardTextTheme;
    subText: ProductCardSubTextTheme;
    separator: ProductCardSeparatorTheme;
    closeButton: ProductCardCloseButtonTheme;
}
export interface NavBarTheme {
    centerButton: {
        color: string;
        fill: string;
    };
    caption: {
        color: string;
    };
    iconWrapper: {
        bg: string;
    };
    title: {
        color: string;
    };
}
export interface TextRowTheme {
    row: {
        color: string;
        disabledColor: string;
    };
    description: {
        color: string;
    };
}
export interface TitleRowTheme {
    title: {
        color: string;
    };
    row: {
        color: string;
    };
}
export interface SwitcherRowTheme {
    row: {
        color: string;
        disabledColor: string;
    };
    description: {
        color: string;
    };
}
export interface UiKitTheme {
    button: ButtonTheme;
    checkBox: CheckBoxTheme;
    divider: DividerTheme;
    drawer: DrawerTheme;
    inputBase: InputBaseTheme;
    modal: ModalTheme;
    segmentedPicker: SegmentedPickerTheme;
    select: SelectsTheme;
    stepper: StepperTheme;
    switcher: SwitcherTheme;
    tabBar: TabBarTheme;
    title: TitleTheme;
    amount: AmountTheme;
    checkBoxRow: CheckBoxRowTheme;
    info: InfoTheme;
    infoRow: InfoRowTheme;
    navBar: NavBarTheme;
    productCard: ProductCardTheme;
    textRow: TextRowTheme;
    switcherRow: SwitcherRowTheme;
    titleRow: TitleRowTheme;
    global: SerializedStyles;
}
export {};
