import { ButtonProps } from './types';
import { ButtonTheme } from '../@themes';
import { StyledButtonProps } from './styles';
export declare const getStylesByButtonType: (props: StyledButtonProps, theme: ButtonTheme) => import("@emotion/utils").SerializedStyles;
export declare const getStylesByButtonSize: (props: ButtonProps, ButtonTheme: ButtonTheme) => import("@emotion/utils").SerializedStyles;
