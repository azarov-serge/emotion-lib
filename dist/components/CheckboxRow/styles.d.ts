/// <reference types="react" />
import { CheckboxProps } from '../../ui-kit/Checkbox';
declare type RowProps = Pick<CheckboxProps, 'disabled' | 'error'>;
export declare const Row: import("@emotion/styled").StyledComponent<import("../../ui-kit/base/Row").RowProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & RowProps, {}, {}>;
declare type PriceProps = Pick<CheckboxProps, 'disabled'>;
export declare const Price: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & PriceProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export {};
