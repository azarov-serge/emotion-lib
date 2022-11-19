import { css } from '@emotion/react';
import { InputState } from 'ui-kit/base/InputBase/constants';
import { InputBaseTheme, ElementInputBaseTheme } from '../../types';
import { Color } from '../color';

const label = css`
	color: ${Color.Black_Oven};

	&::after {
		color: ${Color.Red_Tomato};
	}
`;

const message: ElementInputBaseTheme = {
	default: css`
		color: ${Color.Black_Oven_35};
	`,
	disabled: css`
		color: ${Color.Black_Oven_10};
	`,
	error: css`
		color: ${Color.Red_Tomato};
	`,
	success: css`
		color: ${Color.Black_Oven_35};
	`,
};

const input: ElementInputBaseTheme = {
	default: css`
		color: ${Color.Black_Oven};
		border: 1px solid ${Color.Black_Oven_10};
		background-color: ${Color.White};

		&:hover {
			border: 1px solid ${Color.Black_Oven_35};
			background-color: ${Color.Black_Oven_02};
		}
		&:focus {
			color: ${Color.Black_Oven};
			border: 1px solid ${Color.Black_Oven};
		}

		&::placeholder {
			color: ${Color.Black_Oven_35};
		}
	`,
	disabled: css`
		color: ${Color.Black_Oven_10};
		border: 1px solid ${Color.Black_Oven_05};
		background-color: ${Color.Black_Oven_05};

		&:hover {
			border: 1px solid ${Color.Black_Oven_05};
			background-color: ${Color.Black_Oven_05};
		}
		&:focus {
			color: ${Color.Black_Oven_10};
			border: 1px solid ${Color.Black_Oven_05};
		}

		&::placeholder {
			color: ${Color.Black_Oven_35};
		}
	`,
	error: css`
		color: ${Color.Red_Tomato};
		border: 1px solid ${Color.Red_Tomato};
		background-color: ${Color.Red_Tomato_05};

		&:hover {
			border: 1px solid ${Color.Red_Tomato};
			background-color: ${Color.Black_Oven_02};
		}
		&:focus {
			color: ${Color.Black_Oven};
			border: 1px solid ${Color.Red_Tomato};
		}

		&::placeholder {
			color: ${Color.Black_Oven_35};
		}
	`,
	success: css`
		color: ${Color.Black_Oven};
		border: 1px solid ${Color.Green_Salad};
		background-color: ${Color.White};

		&:hover {
			border: 1px solid ${Color.Black_Oven_35};
			background-color: ${Color.Black_Oven_02};
		}
		&:focus {
			color: ${Color.Black_Oven};
			border: 1px solid ${Color.Black_Oven};
		}

		&::placeholder {
			color: ${Color.Black_Oven_35};
		}
	`,
};

export const inputBase: InputBaseTheme = {
	label,
	message,
    input,
};
