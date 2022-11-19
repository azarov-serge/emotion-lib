import { ComponentSize } from '../../@types';
import { ActionProps } from './types';

export const defaultProps: Required<
	Pick<ActionProps, 'disabled' | 'size' | 'mb'>
> = {
	disabled: false,
	size: ComponentSize.large,
	mb: 0,
};
