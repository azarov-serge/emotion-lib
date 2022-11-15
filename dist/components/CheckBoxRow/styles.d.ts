/// <reference types="react" />
import { CheckBoxProps } from '@/ui-kit/Checkbox/types';
declare type RowProps = Pick<CheckBoxProps, 'disabled' | 'error'>;
export declare const Row: import("@emotion/styled").StyledComponent<import("@/ui-kit/base/Row").RowProps & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
} & RowProps, {}, {}>;
declare type PriceProps = Pick<CheckBoxProps, 'disabled'>;
export declare const Price: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & PriceProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export {};
