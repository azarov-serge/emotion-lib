/// <reference types="react" />
import { StepperProps } from '@/ui-kit/Stepper/types';
declare type WrapperProps = Pick<StepperProps, 'mb' | 'size'>;
export declare const Wrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & WrapperProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare type InputProps = {
    uiSize: StepperProps['size'];
};
export declare const Input: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & InputProps, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const Spinner: import("@emotion/styled").StyledComponent<import("@/ui-kit").IconProps & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const ButtonIcon: import("@emotion/styled").StyledComponent<import("@/ui-kit").IconProps & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Pick<StepperProps, "size"> & {
    selfDisabled?: boolean | undefined;
    isLoading?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
