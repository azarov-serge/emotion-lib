import { RowProps } from './types';

export const defaultProps: Required<Pick<RowProps, 'block' | 'mb'>> = {
	block: true,
	mb: 0,
};
