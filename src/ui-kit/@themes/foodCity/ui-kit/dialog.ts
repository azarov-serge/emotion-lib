import { css } from '@emotion/react';
import { DialogTheme } from '../../../@themes/types';
import { Color } from '../color';

export const dialog: DialogTheme = {
	default: css`
		background: transparent;
		visibility: hidden;
	`,
	opened: css`
		background: ${Color.Black_Oven}50;
		visibility: visible;
	`,
};
