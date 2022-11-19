import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Row as BaseRow } from '../../ui-kit/base';
import { Title as BaseTitle } from '../../ui-kit';
import { TitleRowProps } from './types';
import { UiKitTheme } from '../../ui-kit/@themes';

export const Row = styled(BaseRow)((props) => {
	const { theme } = props;
	const { row } = (theme as UiKitTheme).titleRow;

	return css`
		${row.styles};
	`;
});

type TitleProps = Pick<TitleRowProps, 'level'>;
export const Title = styled(BaseTitle)<TitleProps>((props) => {
	const { level, theme } = props;
	const { title } = (theme as UiKitTheme).titleRow;

	if (level === 4) {
		return css`
			font-size: 16px;
			line-height: 28px;
			${title.styles};
		`;
	}

	return css`
		${title.styles};
	`;
});
