import { css } from '@emotion/react';
import { Color } from '../color';

const wrapper = {
	disabled: css`
		background-color: ${Color.Black_Oven_05};
		color: ${Color.Black_Oven_35};
	`,
};

const oldValue = css`
	color: ${Color.Black_Oven_35};
`;

export const amount = {
	wrapper,
	oldValue,
};
