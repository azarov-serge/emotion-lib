import { css } from '@emotion/react';
import {SelectTheme} from '../../types';
import { Color } from '../color';

const toggle = {
	default: css`
		color: ${Color.Black_Oven};
		cursor: pointer;
	`,
	disabled: css`
		color: ${Color.Black_Oven_35};
		cursor: not-allowed;
	`,
};

const options = {
	default: css`
		background: ${Color.White};
	`,
};

const option = {
	default: css`
		color: ${Color.Black_Oven};

		cursor: pointer;

		background: ${Color.White};

		&:hover {
			background: ${Color.Black_Oven_02};
		}

		&:active {
			background: ${Color.Black_Oven_10};
		}
	`,
	disabled: css`
		color: ${Color.Black_Oven_35};
		cursor: not-allowed;

		&:hover {
			background: ${Color.White};
		}

		&:active {
			background: ${Color.White};
		}
	`,
	selected: css`
		background: ${Color.Black_Oven_10};
	`,
};

const noData = {
	default: css`
		background: ${Color.White};
	`,
};

const spinner = {
	default: css`
		svg {
			stroke: ${Color.Black_Oven_65};
		}
	`,
};

export const select: SelectTheme = {
	toggle,
	options,
	option,
	noData,
    spinner,
};
