/// <reference types="react" />
import { ComponentSize } from '@/ui-kit/@types';
interface ButtonProps {
    size: keyof typeof ComponentSize;
    mb: number;
}
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ButtonProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
