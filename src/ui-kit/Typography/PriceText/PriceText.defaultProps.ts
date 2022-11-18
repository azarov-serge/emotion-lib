import { PriceTextProps } from './types';

export const defaultProps: Required<
	Pick<
		PriceTextProps,
		| 'underline'
		| 'deleted'
		| 'block'
		| 'size'
		| 'align'
		| 'children'
		| 'currency'
	>
> = {
	underline: false,
	deleted: false,
	block: false,
	size: 'middle',
	align: 'left',
	children: 18_000,
	currency: '₽',
};
