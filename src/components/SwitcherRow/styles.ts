import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SwitcherProps } from '../../ui-kit/Switcher/types';
import { BaseRow } from '../../ui-kit/base';
import { UiKitTheme } from '../../ui-kit/@themes';

type RowProps = Pick<SwitcherProps, 'disabled'>;
export const Row = styled(BaseRow)<RowProps>((props) => {
	const { disabled, theme } = props;
	const { row } = (theme as UiKitTheme).switcherRow;

	return css`
		${row.default.styles}
		${disabled && row.disabled.styles}
	`;
});

export const Content = styled.div(() => {
	return css`
		display: block;
		flex-grow: 1;
	`;
});

export const Title = styled.p(() => {
	return css`
		margin: 0;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 28px;
	`;
});

export const Description = styled.div((props) => {
	const { theme } = props;
	const { description } = (theme as UiKitTheme).switcherRow;

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
