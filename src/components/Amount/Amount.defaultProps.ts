import { AmountProps } from './types';

export const defaultProps: Required<Pick<AmountProps, 'value' | 'currency'>> = {
	value: 0,
	currency: '₽',
};
