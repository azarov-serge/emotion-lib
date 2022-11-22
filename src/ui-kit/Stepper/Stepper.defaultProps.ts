import { StepperProps } from './types';

export const defaultProps: Required<
	Pick<
		StepperProps,
		'min' | 'max' | 'mb' | 'step' | 'decrementProps' | 'incrementProps'
	>
> = {
	min: 0,
	max: 999,
	mb: 0,
	step: 1,
	decrementProps: { loading: false },
	incrementProps: { loading: false },
};
