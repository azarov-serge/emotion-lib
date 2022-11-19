import { css } from '@emotion/react';
import { Color } from '../color';
import { TextRowTheme } from '../../types';

export const textRow: TextRowTheme = {
	description: css`
		color: ${Color.Black_Oven_35};
	`,
	row: {
		default: css`
			color: ${Color.Black_Oven};
		`,
		disabled: css`
			color: ${Color.Black_Oven_35};
		`,
	},
};
