import { SerializedStyles } from '@emotion/react';
import { ProductCardType } from 'components';
import { InfoType } from '../../components/Info';
import { ComponentSize } from '../@types';
import { InputState } from '../base/InputBase/constants';
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
export interface MessageTheme {
    wrapper: SerializedStyles;
    text: SerializedStyles;
}
export interface ModalTheme {
    wrapper: SerializedStyles;
    closeButton: SerializedStyles;
}
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
export interface SystemModalTheme {
    container: SerializedStyles;
    title: SerializedStyles;
    text: SerializedStyles;
    action: SerializedStyles;
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
export interface InfoTheme {
    row: Record<keyof typeof InfoType, SerializedStyles>;
    title: SerializedStyles;
    description: SerializedStyles;
    infoBox: Record<keyof typeof InfoType, SerializedStyles>;
}
export interface InfoRowTheme {
    row: {
        default: SerializedStyles;
        disabled: SerializedStyles;
    };
    iconBox: SerializedStyles;
    description: SerializedStyles;
}
export interface NavBarTheme {
    centerButton: SerializedStyles;
    caption: SerializedStyles;
    iconWrapper: SerializedStyles;
    title: SerializedStyles;
}
export declare type ProductCardWrapperTheme = Record<ProductCardType, SerializedStyles>;
export declare type ProductCardImgTheme = SerializedStyles;
export declare type ProductCardShadowTheme = Record<ProductCardType, SerializedStyles>;
export declare type ProductCardTextTheme = Record<ProductCardType, SerializedStyles>;
export declare type ProductCardSubTextTheme = SerializedStyles;
export declare type ProductCardSeparatorTheme = SerializedStyles;
export declare type ProductCardCloseButtonTheme = SerializedStyles;
export interface ProductCardTheme {
    wrapper: ProductCardWrapperTheme;
    img: ProductCardImgTheme;
    shadow: ProductCardShadowTheme;
    text: ProductCardTextTheme;
    subText: ProductCardSubTextTheme;
    separator: ProductCardSeparatorTheme;
    closeButton: ProductCardCloseButtonTheme;
}
export interface SwitcherRowTheme {
    row: {
        default: SerializedStyles;
        disabled: SerializedStyles;
    };
    description: SerializedStyles;
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
export {};
