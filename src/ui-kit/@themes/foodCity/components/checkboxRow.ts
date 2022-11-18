import { css } from '@emotion/react';
import {
	CheckboxRowTheme,
	PriceCheckboxRowTheme,
	RowCheckboxRowTheme,
} from '../../types';
import { Color } from '../color';

const row: RowCheckboxRowTheme = {
	default: css`
		color: ${Color.Black_Oven};
		background-color: ${Color.Black_Oven_05};
	`,
	disabled: css`
		color: ${Color.Black_Oven_35};
	`,
	error: css`
		background-color: ${Color.Red_Tomato_05};
	`,
};

const price: PriceCheckboxRowTheme = {
	default: css`
		background-color: ${Color.White};
	`,
	disabled: css`
		background-color: transparent;
	`,
};

export const checkboxRow: CheckboxRowTheme = {
	row,
	price,
};
