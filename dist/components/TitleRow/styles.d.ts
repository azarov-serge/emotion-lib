/// <reference types="react" />
import { TitleRowProps } from '@/components/TitleRow/types';
export declare const Row: import("@emotion/styled").StyledComponent<import("@/ui-kit/base").RowProps & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
declare type TitleProps = Pick<TitleRowProps, 'level'>;
export declare const Title: import("@emotion/styled").StyledComponent<import("@/ui-kit").TitleProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & TitleProps, {}, {}>;
export {};
