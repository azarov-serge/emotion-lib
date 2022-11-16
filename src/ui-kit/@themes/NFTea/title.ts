import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '../../@constants';
import {TitleStyle} from '../types';

const H_BASE_STYLE = css`
	font-family: ${FontFamily.HalvarMittelschrift};
	font-style: normal;
	font-weight: ${FontWeight.w700};

	color: ${Color.NFTea.Purple_Sugar_100};
`;

const h1 = css`
	${H_BASE_STYLE.styles}
	font-family: ${FontFamily.HalvarBreitschrift};
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

export const title: TitleStyle = {
    h1,
    h2,
    h3,
    h4,
}
