import { TitleProps } from './types';

export const defaultProps: Required<
	Pick<TitleProps, 'level' | 'align' | 'children'>
> = {
	level: 1,
	align: 'center',
	children: 'Title',
};
