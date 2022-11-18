import { ButtonProps } from './types';
import { ComponentSize } from '../@types';

export const defaultProps: Required<
	Pick<ButtonProps, 'kind' | 'size' | 'disabled' | 'block' | 'loading' | 'mb'>
> = {
	kind: 'primary',
	size: ComponentSize.middle,
	disabled: false,
	block: false,
	loading: false,
	mb: 0,
};
