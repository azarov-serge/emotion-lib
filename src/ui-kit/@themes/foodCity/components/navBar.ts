import { css } from '@emotion/react';
import { NavBarTheme } from '../../types';
import { Color } from '../color';

export const navBar: NavBarTheme = {
	centerButton: css`
		color: ${Color.Black_Oven_35};
		> svg,
		path {
			fill: ${Color.Black_Oven_35};
		}
	`,
	caption: css`
		color: ${Color.Purple};
	`,
	iconWrapper: css`
		background: ${Color.Black_Oven_05};
	`,
	title: css`
		color: ${Color.Black_Oven};
	`,
};
