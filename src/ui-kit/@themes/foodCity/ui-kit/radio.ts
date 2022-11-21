import { css } from '@emotion/react';
import { DotRadioTheme, LabelRadioTheme, RadioTheme } from '../../types';
import { Color } from '../color';

const label: LabelRadioTheme = {
	default: css`
		color: ${Color.Black_Oven};
	`,
	disabled: css`
		color: ${Color.Black_Oven_35};
        cursor: not-allowed;
	`,
	error: css`
		color: ${Color.Red_Tomato};
	`,
};

const dot: DotRadioTheme = {
	default: css`
		border: 1px solid ${Color.Black_Oven_35};
		background-color: ${Color.White};

		&::before {
			background-color: ${Color.Black_Oven};
		}

		&:hover:not([disabled]) {
			border-color: ${Color.Black_Oven};
		}
	`,
	checked: css`
		border: 1px solid ${Color.Black_Oven};
	`,
	disabled: css`
		border: 1px solid ${Color.Black_Oven_10};
		background-color: ${Color.Black_Oven_05};
        cursor: not-allowed;

		&::before {
			background-color: ${Color.Black_Oven_35};
		}
	`,
	error: css`
		border: 1px solid ${Color.Red_Tomato};
		background-color: ${Color.Red_Tomato_05};

		&::before {
			background-color: ${Color.Red_Tomato};
		}
	`,
};

export const radio: RadioTheme = {
	label,
	dot,
};
