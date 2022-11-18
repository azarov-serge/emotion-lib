import { css } from '@emotion/react';
import { ButtonTheme, ButtonTypeTheme } from '../../types';
import { Color } from '../color';

const middleLoading = {
	primary: css`
		color: ${Color.Black_Oven_35};
	`,
	secondary: css`
		color: ${Color.Black_Oven_65};
	`,
	danger: css`
		background-color: ${Color.Black_Oven_05};
		border-color: ${Color.Black_Oven_05};
	`,
	ghost: css`
		color: ${Color.Black_Oven_65};
		background-color: ${Color.Black_Oven_02};
		border-color: ${Color.Black_Oven_02};
	`,
};

const middleDisabled = css`
	&:hover,
	&:focus,
	&:active,
	& {
		color: ${Color.Black_Oven_35};
		background-color: ${Color.Black_Oven_05};
		border-color: ${Color.Black_Oven_05};
	}
`;

const middlePrimary = css`
	color: ${Color.White};
	background-color: ${Color.Black_Oven};
	border-color: ${Color.Black_Oven};

	&:hover {
		background-color: ${Color.Black_Oven_65};
		border-color: ${Color.Black_Oven_65};
	}

	&:active {
		color: ${Color.Black_Oven_35};
		background-color: ${Color.Black_Oven};
		border-color: ${Color.Black_Oven};
	}
`;

const middleSecondary = css`
	color: ${Color.Black_Oven};
	background-color: ${Color.Black_Oven_05};

	&:hover {
		color: ${Color.Black_Oven_65};
		background-color: ${Color.White};
	}

	&:active {
		color: ${Color.Black_Oven};
		background-color: ${Color.Black_Oven_10};
		border-color: ${Color.Black_Oven_10};
	}
`;

const middleDanger = css`
	color: ${Color.Red_Tomato};
	background-color: ${Color.Black_Oven_10};
	border-color: ${Color.Black_Oven_10};

	&:hover {
		color: ${Color.Red_Tomato};
		background-color: ${Color.White};
		border-color: ${Color.White};
	}

	&:active {
		color: ${Color.Red_Tomato_80};
		background-color: ${Color.Black_Oven_05};
		border-color: ${Color.Black_Oven_05};
	}
`;

const middleGhost = css`
	color: ${Color.Black_Oven};
	background-color: transparent;
	border-color: transparent;

	&:hover {
		color: ${Color.Black_Oven_65};
		background-color: transparent;
		border-color: transparent;
	}

	&:active {
		color: ${Color.Black_Oven};
		background-color: ${Color.Black_Oven_05};
		border-color: ${Color.Black_Oven_05};
	}
`;

const middleDefault = css`
	padding: 16px;
	border-radius: 16px;

	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
`;

const middle: ButtonTypeTheme = {
	loading: middleLoading,
	default: middleDefault,
	disabled: middleDisabled,
	primary: middlePrimary,
	secondary: middleSecondary,
	danger: middleDanger,
	ghost: middleGhost,
};

const smallLoading = {
	primary: css`
		color: ${Color.Black_Oven_35};
	`,
	secondary: css`
		color: ${Color.Black_Oven_65};
	`,
	danger: css`
		background-color: transparent;
		border-color: transparent;
	`,
	ghost: css`
		color: ${Color.Black_Oven_65};
		background-color: transparent;
		border-color: ${Color.Black_Oven};
	`,
};

const smallDefault = css`
	padding: 8px 12px;

	border-radius: 13px;

	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
`;

const smallDisabled = css`
	&:hover,
	&:focus,
	&:active,
	& {
		color: ${Color.Black_Oven_35};
		background-color: ${Color.Black_Oven_05};
		border-color: ${Color.Black_Oven_05};
	}
`;
const smallPrimary = middlePrimary;

const smallSecondary = middleSecondary;

const smallDanger = css`
	color: ${Color.Red_Tomato};
	background-color: transparent;
	border-color: transparent;

	&:hover {
		color: ${Color.Red_Tomato_80};
		background-color: ${Color.White};
		border-color: ${Color.White};
	}

	&:active {
		color: ${Color.Red_Tomato_80};
		background-color: ${Color.Black_Oven_05};
		border-color: ${Color.Black_Oven_05};
	}
`;

const smallGhost = css`
	border-color: ${Color.Black_Oven};
	background-color: transparent;

	&:hover {
		color: ${Color.Black_Oven_65};
		background-color: transparent;
		border-color: transparent;
	}

	&:active {
		color: ${Color.Black_Oven};
		background-color: ${Color.Black_Oven_05};
		border-color: ${Color.Black_Oven_05};
	}
`;

const small: ButtonTypeTheme = {
	loading: smallLoading,
	default: smallDefault,
	disabled: smallDisabled,
	primary: smallPrimary,
	secondary: smallSecondary,
	danger: smallDanger,
	ghost: smallGhost,
};

const spin = {
	primary: css`
		border: 2px solid rgb(255 255 255 / 30%);
		border-left-color: ${Color.Black_Oven_35};
	`,
	secondary: css`
		border: 2px solid rgb(0 0 0 / 20%);
		border-left-color: ${Color.Black_Oven_65};
	`,
	danger: css`
		border: 2px solid ${Color.Red_Tomato_80}20;
		border-left-color: ${Color.Red_Tomato_80};
	`,
	ghost: css`
		border: 2px solid rgb(0 0 0 / 20%);
		border-left-color: ${Color.Black_Oven_65};
	`,
};

export const button: ButtonTheme = {
	small,
	middle,
	spin,
};
