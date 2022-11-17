import { css } from '@emotion/react';
import { font } from '../font';
import { PriceTextTheme } from '../../types';

export const priceText: PriceTextTheme = {
	'extra-small': css`
		font-size: 13px;
		font-weight: 700;
		font-style: normal;
		line-height: 18px;
	`,
	small: css`
		font-size: 15px;
		font-weight: 700;
		font-style: normal;
		line-height: 18px;
	`,
	middle: css`
		font-size: 17px;
		font-weight: 700;
		font-style: normal;
		line-height: 18px;
	`,
	large: css`
		font-size: 20px;
		font-weight: 700;
		font-style: normal;
		line-height: 18px;
	`,
};
