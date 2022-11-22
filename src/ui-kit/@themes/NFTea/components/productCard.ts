import { css } from '@emotion/react';
import {
	ProductCardCloseButtonTheme,
	ProductCardImgTheme,
	ProductCardSeparatorTheme,
	ProductCardShadowTheme,
	ProductCardSubTextTheme,
	ProductCardTextTheme,
	ProductCardTheme,
	ProductCardWrapperTheme,
} from '../../types';

import { Color } from '../color';
import { font } from '../font';

const wrapper: ProductCardWrapperTheme = {
	cart: css`
		background: ${Color.Black_Oven_05};
		border: none;
	`,
	default: css`
		background: ${Color.White};
		border: 2px solid ${Color.Black_Oven};
	`,
};

const img: ProductCardImgTheme = css`
	background-color: ${Color.Black_Oven_35};
`;

const shadow: ProductCardShadowTheme = {
	cart: css`
		color: ${Color.Black_Oven};
		background: transparent;
	`,
	default: css`
		color: ${Color.White};
		background: linear-gradient(
			360deg,
			${Color.Black_Oven} 37.82%,
			rgba(9, 9, 10, 0.62) 61.12%,
			rgba(9, 9, 10, 0.31) 85%,
			rgba(9, 9, 10, 0) 100%
		);
	`,
};

const text: ProductCardTextTheme = {
	cart: css`
		font-family: ${font.family2};
		color: ${Color.Black_Oven};
	`,
	default: css`
		font-family: ${font.family2};
		color: ${Color.White};
	`,
};

const subText: ProductCardSubTextTheme = css`
	font-family: ${font.family2};
	color: ${Color.Black_Oven_35};
`;

const separator: ProductCardSeparatorTheme = css`
	background: ${Color.Black_Oven_35};
`;

const closeButton: ProductCardCloseButtonTheme = css`
	> svg,
	path {
		fill: ${Color.Black_Oven_10};
	}
`;

export const productCard: ProductCardTheme = {
	wrapper,
	img,
	shadow,
	text,
	subText,
	separator,
	closeButton,
};
