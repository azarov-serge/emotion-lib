import { css } from '@emotion/react';
import { MessageTheme } from '../../types';
import { Color } from '../color';

export const message: MessageTheme = {
	wrapper: css`
		background: ${Color.Black_Oven};
	`,
	text: css`
		color: ${Color.White};
	`,
};
