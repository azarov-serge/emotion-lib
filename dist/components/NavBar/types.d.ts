import { IconProps } from '@/ui-kit';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface NavBarButtonProps {
    isLeft?: boolean;
    leftIcon?: IconProps;
    rightIcon?: IconProps;
    caption?: string;
    onClick?: (...args: any[]) => void;
}
export interface NavBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    leftButton?: NavBarButtonProps;
    centerButton?: NavBarButtonProps;
    rightButton?: NavBarButtonProps;
}
