import { SwitcherProps } from './../../ui-kit/Switcher';
import { SwitcherRowProps } from './types';

export const defaultProps: Required<
	Pick<SwitcherRowProps, 'mb' | 'switcherProps'>
> = {
	mb: 0,
	switcherProps: {} as SwitcherProps,
};
