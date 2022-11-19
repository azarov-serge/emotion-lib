import { css } from '@emotion/react';
import {ModalTheme} from '../../types';
import { Color } from '../color';

export const modal: ModalTheme = {
	wrapper: css`
		background: ${Color.White};
	`,
	closeButton: css`
		> svg,
		path {
			fill: ${Color.Black_Oven_10};
		}
	`,
};
