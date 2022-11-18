import { css } from '@emotion/react';
import { CheckboxElementTheme, CheckboxTheme, CheckboxTickTheme } from '../../types';
import { Color } from '../color';

const label: CheckboxElementTheme = {
	default: css`
		color: ${Color.Black_Oven_35};

		> span {
			color: ${Color.Black_Oven};
		}

		&:hover:not([disabled]) {
			color: ${Color.Black_Oven};
		}
	`,
	disabled: css`
		color: ${Color.Black_Oven_10};
		cursor: not-allowed;
		
		> span {
			color: ${Color.Black_Oven_35};
		}

		&:hover:not([disabled]) {
			color: ${Color.Black_Oven_35};
		}
	`,
	checked: css`
		color: ${Color.Black_Oven};
	`,
	error: css`
		color: ${Color.Red_Tomato};

		> span {
			color: ${Color.Red_Tomato};
		}

		&:hover:not([disabled]) {
			color: ${Color.Red_Tomato};
		}
	`,
};

const tick: CheckboxTickTheme = {
	default: css`
		fill: ${Color.White};
	`,
	disabledChecked: css`
		fill: ${Color.Black_Oven_35};
	`,
	error: css`
		fill: ${Color.White};
	`,
};

const box: CheckboxElementTheme = {
	default: css`
		background-color: ${Color.White};

		&::before {
			background-color: ${Color.Black_Oven};
		}
	`,
	disabled: css`
		background-color: ${Color.Black_Oven_05};
		cursor: not-allowed;
		&::before {
			background-color: ${Color.Black_Oven_35};
		}
	`,
	checked: css`
		background-color: ${Color.Black_Oven};
	`,
	error: css`
		background-color: ${Color.Red_Tomato};

		&::before {
			background-color: ${Color.White};
		}
	`,
};

export const checkbox: CheckboxTheme = {
	label,
	tick,
	box,
};
