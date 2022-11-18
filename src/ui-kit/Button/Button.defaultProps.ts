import { ButtonProps, ButtonType } from './types';
import { ComponentSize } from '../@types';

export const defaultProps: Required<
	Pick<ButtonProps, 'type' | 'size' | 'disabled' | 'block' | 'loading' | 'mb'>
> = {
	type: 'primary',
	size: ComponentSize.middle,
	disabled: false,
	block: false,
	loading: false,
	mb: 0,
};
