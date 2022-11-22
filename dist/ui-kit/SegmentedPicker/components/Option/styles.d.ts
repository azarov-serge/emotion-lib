/// <reference types="react" />
import { OptionProps } from './types';
export declare const Label: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Pick<OptionProps, "justify" | "selfIndex" | "checkedIndex" | "totalItems"> & {
    checked: boolean;
}, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
interface ShadowTextProps {
    text: string;
}
export declare const ShadowText: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ShadowTextProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
interface TextProps {
    isNextToCheckedOrFirst: boolean;
    disabled: boolean;
    checked: boolean;
    isLoaderShown: boolean;
}
export declare const Text: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & TextProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Spinner: import("@emotion/styled").StyledComponent<import("../../../Icon").IconProps & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export {};
