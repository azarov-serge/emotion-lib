import { css } from '@emotion/react';
import { SwitcherRowTheme } from '../../types';
import { Color } from '../color';

const row = {
	default: css`
		color: ${Color.Black_Oven};
	`,
	disabled: css`
		color: ${Color.Black_Oven_35};
	`,
};

const description = css`
	color: ${Color.Black_Oven_35};
`;

export const switcherRow: SwitcherRowTheme = {
	row,
	description,
};
