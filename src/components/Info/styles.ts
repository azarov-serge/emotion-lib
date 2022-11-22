import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { InfoType } from './types';
import { BaseRow } from '../../ui-kit/base';
import { UiKitTheme } from '../../ui-kit/@themes';

interface RowProps {
	type: keyof typeof InfoType;
}
export const Row = styled(BaseRow)<RowProps>((props) => {
	const { type, theme } = props;
	const { row } = (theme as UiKitTheme).info;

	return css`
		${row[type].styles};
	`;
});

interface IconBoxProps {
	type: keyof typeof InfoType;
}
export const IconBox = styled.div<IconBoxProps>((props) => {
	const { type, theme } = props;
	const { infoBox } = (theme as UiKitTheme).info;

	return css`
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		${infoBox[type].styles}
	`;
});

export const Content = styled.div(() => {
	return css`
		display: block;
		flex-grow: 1;
	`;
});

export const Title = styled.p((props) => {
	const { theme } = props;
	const { title } = (theme as UiKitTheme).info;

	return css`
		margin: 0;

		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 28px;
		${title.styles}
	`;
});

export const Description = styled.div((props) => {
	const { theme } = props;
	const { description } = (theme as UiKitTheme).info;

	return css`
		margin: 2px 0 0;

		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;

		p {
			margin: 0;
		}

		${description.styles}
	`;
});
