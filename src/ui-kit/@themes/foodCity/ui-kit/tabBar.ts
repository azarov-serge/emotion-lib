import { css } from '@emotion/react';
import { Color } from '../color';
import { TabBarTheme } from '../../types';

export const tabBar: TabBarTheme = {
	wrapper: css`
		color: ${Color.Black_Oven};
		background: ${Color.White};
	`,
	tab: css`
		color: ${Color.Black_Oven_35};
	`,
	tabHover: css`
		color: ${Color.Black_Oven_65};
	`,
	tabActive: css`
		color: ${Color.Black_Oven};
		background: ${Color.Black_Oven_02};
	`,
	tabIsActive: css`
		color: ${Color.Black_Oven};
	`,
	notification: css`
		background: ${Color.Red_Tomato};
		color: ${Color.White};
	`,
	activeState: css`
		background: ${Color.Black_Oven};
	`,
};
