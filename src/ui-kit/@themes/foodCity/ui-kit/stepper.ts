import { css } from '@emotion/react';
import { ButtonStepperTheme, StepperTheme } from '../../types';
import { Color } from '../color';

const button: ButtonStepperTheme = {
	default: css`
		color: ${Color.Black_Oven};
		background-color: ${Color.White};

		&:hover:not(:active, [disabled]) {
			color: ${Color.Black_Oven_65};
		}

		&:active:not([disabled]) {
			color: ${Color.Black_Oven};
			background: ${Color.Black_Oven_02};
		}
	`,
	loading: css`
		background-color: ${Color.Black_Oven_02};
	`,
	disabled: css`
		&[disabled] {
			color: ${Color.Black_Oven_10};
		}
	`,
};

const wrapper = {
	small: css``,
	middle: css`
		border: 2px solid ${Color.Black_Oven_10};
	`,
	large: css``,
};

export const stepper: StepperTheme = {
	wrapper,
	spinner: css`
		svg {
			stroke: ${Color.Black_Oven_65};
		}
	`,
	button,
};
