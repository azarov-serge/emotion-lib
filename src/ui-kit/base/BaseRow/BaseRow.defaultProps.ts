import { BaseRowProps } from './types';

export const defaultProps: Required<Pick<BaseRowProps, 'block' | 'mb'>> = {
	block: true,
	mb: 0,
};
