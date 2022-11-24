/// <reference types="react" />
import { ButtonProps } from './types';
export interface StyledButtonProps extends ButtonProps {
    isLoading: boolean;
}
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Omit<StyledButtonProps, "loading"> & {
    isLoading: boolean;
}, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const ButtonIcon: import("@emotion/styled").StyledComponent<import("../Icon").IconProps & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<StyledButtonProps, "size">, {}, {}>;
export declare const Spin: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Pick<ButtonProps, "size" | "icon" | "kind"> & {
    isLoading?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
