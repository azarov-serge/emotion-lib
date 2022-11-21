import { css } from '@emotion/react';
import {SystemModalTheme} from '../../types';
import { Color } from '../color';

const container = css`
	background: ${Color.Black_Oven_05};
`;

const title = css`
	color: ${Color.Black_Oven};
`;

const text = css`
	color: ${Color.Black_Oven_65};
`;

const action = css`
	border-top: 0.5px solid ${Color.Black_Oven_35};
`;

export const systemModal: SystemModalTheme = {
	container,
	title,
	text,
	action,
};
