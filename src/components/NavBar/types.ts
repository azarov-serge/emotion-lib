import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IconProps } from '../../ui-kit';

export interface NavBarButtonProps {
  isLeft?: boolean;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  caption?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...args: any[]) => void;
}

export interface NavBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  leftButton?: NavBarButtonProps;
  centerButton?: NavBarButtonProps;
  rightButton?: NavBarButtonProps;
}
