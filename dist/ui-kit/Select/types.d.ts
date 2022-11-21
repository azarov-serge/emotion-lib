import { InputBaseProps } from '../base/InputBase';
import { IconProps } from '../Icon';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
export declare type SelectOptionType = {
    selected?: boolean;
    caption: string;
    value: string;
    disabled?: boolean;
    render?: Function;
};
declare type InputHtmlProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export interface SelectProps extends InputBaseProps, Omit<InputHtmlProps, 'onSelect' | 'onChange'> {
    value?: string;
    options: Omit<SelectOptionType, 'selected'>[];
    autocomplete?: boolean;
    icon?: IconProps;
    loading?: boolean;
    onChange: (value: string) => Promise<void> | void;
    onFocus?: () => void;
}
export {};
