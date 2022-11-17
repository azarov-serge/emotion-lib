import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color } from '../color';
import {font } from '../font'
import { TitleTheme } from '../../types';

const H_BASE_STYLE = css`
	font-family: ${font.family1};
	font-weight: 700;
	font-style: normal;

	color: ${Color.Black_Oven};
`;

const h1 = css`
	${H_BASE_STYLE}
	font-size: 48px;
	line-height: 56px;
`;

const h2 = css`
	${H_BASE_STYLE}

	font-size: 32px;
	line-height: 40px;
`;

const h3 = css`
	${H_BASE_STYLE}
	font-size: 24px;
	line-height: 32px;
`;

const h4 = css`
	font-family: ${font.family3};
	font-size: 17px;
	font-weight: 600;
	font-style: normal;
	line-height: 22px;
`;

export const title: TitleTheme = {
	h1,
	h2,
	h3,
	h4,
};
