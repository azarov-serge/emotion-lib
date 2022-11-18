/// <reference types="react" />
import { CheckboxProps } from './types';
export declare const Wrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Required<Pick<CheckboxProps, "block" | "mb">>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare type LabelProps = Pick<CheckboxProps, 'checked' | 'disabled' | 'error'>;
export declare const Label: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & LabelProps, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
declare type TickProps = Pick<CheckboxProps, 'checked' | 'disabled' | 'error'>;
export declare const Tick: import("@emotion/styled").StyledComponent<import("../Icon").IconProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & TickProps, {}, {}>;
declare type BoxProps = Pick<CheckboxProps, 'checked' | 'disabled' | 'error' | 'indeterminate'>;
export declare const Box: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & BoxProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Input: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export {};
