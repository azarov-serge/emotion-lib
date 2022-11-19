import { SpinnerProps } from './types';

export const defaultProps: Required<Omit<SpinnerProps, 'fill'>> = {
	size: 48,
	mb: 0,
};
