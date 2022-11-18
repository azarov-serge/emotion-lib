import { TextProps } from './types';

export const defaultProps: Required<
	Pick<
		TextProps,
		'underline' | 'deleted' | 'strong' | 'block' | 'size' | 'align' | 'children'
	>
> = {
	underline: false,
	deleted: false,
	strong: false,
	block: false,
	size: 'middle',
	align: 'left',
	children: 'Text',
};
