import { css } from '@emotion/react';
import {InputTheme} from '../../types';
import { Color } from '../color';

export const input: InputTheme = {
	button: {
		default: css`
			> * svg {
				fill: ${Color.Black_Oven_35};
			}
		`,
		disabled: css`
			> * svg {
				fill: ${Color.Black_Oven_10};
			}
		`,
	},
};
