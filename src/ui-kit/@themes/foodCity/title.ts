import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color, FontFamily, FontWeight } from '../../@constants';
import { TitleStyle } from '../types';

const H_BASE_STYLE = css`
	font-family: ${FontFamily.SFPro};
	font-weight: 700;
	font-style: normal;

	color: ${Color.foodCity.Black_Oven};
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
	font-family: ${FontFamily.SFProText};
	font-size: 17px;
	font-weight: 600;
	font-style: normal;
	line-height: 22px;
`;

export const title: TitleStyle = {
	h1,
	h2,
	h3,
	h4,
};
