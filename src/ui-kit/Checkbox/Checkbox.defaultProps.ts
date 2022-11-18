import { CheckboxProps } from './types';

export const defaultProps: Required<
	Pick<
		CheckboxProps,
		'error' | 'indeterminate' | 'disabled' | 'checked' | 'block' | 'mb'
	>
> = {
	error: false,
	indeterminate: false,
	checked: false,
	disabled: false,
	block: true,
	mb: 0,
};
