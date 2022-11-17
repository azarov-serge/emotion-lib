import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UiKitTheme } from '../../@themes';
import { TitleProps } from './types';

export const H1 = styled.h1<TitleProps>((props) => {
	const { align = 'center', mb = 0, theme } = props;
	const { h1 } = (theme as UiKitTheme).title;

	return css`
		${h1.styles}

		text-align: ${align};
		margin-bottom: ${mb}px;
	`;
});

export const H2 = styled.h2<TitleProps>((props) => {
	const { align = 'center', mb = 0, theme } = props;
	const { h2 } = (theme as UiKitTheme).title;

	return css`
		${h2.styles}

		text-align: ${align};
		margin-bottom: ${mb}px;
	`;
});

export const H3 = styled.h3<TitleProps>((props) => {
	const { align = 'center', mb = 0, theme } = props;
	const { h3 } = (theme as UiKitTheme).title;

	return css`
		${h3.styles}

		text-align: ${align};
		margin-bottom: ${mb}px;
	`;
});

export const H4 = styled.h4<TitleProps>((props) => {
	const { align = 'center', mb = 0, theme } = props;
	const { h4 } = (theme as UiKitTheme).title;

	return css`
		${h4.styles}

		text-align: ${align};
		margin-bottom: ${mb}px;
	`;
});
