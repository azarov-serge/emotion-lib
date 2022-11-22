import { SwitcherProps } from './types';

export const defaultProps: Required<Pick<SwitcherProps, 'checked' | 'mb'>> = {
	checked: false,
	mb: 0,
};
