/// <reference types="react" />
import { CheckBoxProps } from '@/ui-kit/Checkbox/types';
export declare const Wrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Required<Pick<CheckBoxProps, "block" | "mb">>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare type LabelProps = Pick<CheckBoxProps, 'checked' | 'disabled' | 'error'>;
export declare const Label: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & LabelProps, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
declare type TickProps = Pick<CheckBoxProps, 'checked' | 'disabled' | 'error' | 'indeterminate'>;
export declare const Tick: import("@emotion/styled").StyledComponent<import("@/ui-kit").IconProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & TickProps, {}, {}>;
declare type BoxProps = Pick<CheckBoxProps, 'checked' | 'disabled' | 'error' | 'indeterminate'>;
export declare const Box: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & BoxProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Input: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export {};
