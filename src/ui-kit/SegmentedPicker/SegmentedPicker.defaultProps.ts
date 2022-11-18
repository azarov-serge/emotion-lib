import { SegmentedPickerProps } from './types';

export const defaultProps: Required<
	Pick<SegmentedPickerProps, 'defaultValue' | 'block' | 'justify' | 'mb'>
> = {
	defaultValue: null,
	block: true,
	justify: 'even',
	mb: 0,
} as const;
