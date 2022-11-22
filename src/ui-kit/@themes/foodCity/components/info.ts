import { css } from '@emotion/react';
import { InfoTheme } from 'ui-kit/@themes/types';
import { Color } from '../color';

const row = {
	info: css`
		background-color: ${Color.Black_Oven_05};
	`,
	neutral: css`
		background-color: ${Color.White};
	`,
	positive: css`
		background-color: ${Color.Green_Salad_20};
	`,
	warning: css`
		background-color: ${Color.Yellow_Mango_15};
	`,
	negative: css`
		background-color: ${Color.Red_Tomato_10};
	`,
};

const title = css`
	color: ${Color.Black_Oven};
`;

const description = css`
	color: ${Color.Black_Oven_65};
`;

const infoBox = {
	info: css`
		color: ${Color.Black_Oven};
		background-color: ${Color.Black_Oven_10};
	`,
	neutral: css`
		color: ${Color.Black_Oven};
		background-color: ${Color.Black_Oven_05};
	`,
	positive: css`
		color: ${Color.Black_Oven};
		background-color: ${Color.Green_Salad};
	`,
	warning: css`
		color: ${Color.Black_Oven};
		background-color: ${Color.Yellow_Mango};
	`,
	negative: css`
		color: ${Color.Black_Oven};
		background-color: ${Color.Red_Tomato_80};
	`,
};

export const info: InfoTheme = {
	row,
	title,
	description,
	infoBox,
};
