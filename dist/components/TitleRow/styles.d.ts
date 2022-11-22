import { TitleRowProps } from './types';
export declare const Row: import("@emotion/styled").StyledComponent<import("../../ui-kit").BaseRowProps & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
declare type TitleProps = Pick<TitleRowProps, 'level'>;
export declare const Title: import("@emotion/styled").StyledComponent<import("../../ui-kit").TitleProps & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
} & TitleProps, {}, {}>;
export {};
