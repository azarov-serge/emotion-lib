import { RadioProps } from './types';

export const defaultProps: Required<
	Omit<RadioProps, 'onChange'>
> = {
	label: 'Label',
	error: false,
	checked: false,
	disabled: false,
	mb: 0,
};
