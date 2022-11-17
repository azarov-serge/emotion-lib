import { css } from '@emotion/react';
import { Color } from '../color';
import { TitleTheme } from '../../types';
import {font} from '../font';

const H_BASE_STYLE = css`
	font-family: ${font.family2};
	font-style: normal;
	font-weight: 700;

	color: ${Color.Purple_Sugar_100};
`;

const h1 = css`
	${H_BASE_STYLE.styles}
	font-family: ${font.family1};
	font-size: 32px;
	line-height: 40px;

	letter-spacing: 0.02em;

	@media (min-width: 1024px) {
		font-size: 48px;
		line-height: 56px;
	}

	@media (min-width: 1440px) {
		font-size: 72px;
		line-height: 72px;
	}
`;

const h2 = css`
	${H_BASE_STYLE};
	font-size: 17px;
	line-height: 22px;

	letter-spacing: 0.04em;

	@media (min-width: 720px) {
		font-size: 32px;
		line-height: 40px;

		letter-spacing: 0.02em;
	}

	@media (min-width: 1440px) {
		font-size: 48px;
		line-height: 56px;
	}
`;

// Неопределен
const h3 = css`
	${H_BASE_STYLE};
	font-size: 17px;
	line-height: 22px;

	letter-spacing: 0.04em;

	@media (min-width: 720px) {
		font-size: 32px;
		line-height: 40px;

		letter-spacing: 0.02em;
	}

	@media (min-width: 1440px) {
		font-size: 48px;
		line-height: 56px;
	}
`;

// Неопределен
const h4 = css`
	${H_BASE_STYLE};
	font-size: 17px;
	line-height: 22px;

	letter-spacing: 0.04em;

	@media (min-width: 720px) {
		font-size: 32px;
		line-height: 40px;

		letter-spacing: 0.02em;
	}

	@media (min-width: 1440px) {
		font-size: 48px;
		line-height: 56px;
	}
`;

export const title: TitleTheme = {
	h1,
	h2,
	h3,
	h4,
};
