import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Text } from '../../ui-kit';
import { UiKitTheme } from '../../ui-kit/@themes';
import { AmountProps } from './types';

export const Wrapper = styled.span<Pick<AmountProps, 'disabled'>>((props) => {
	const { disabled, theme } = props;
	const { wrapper } = (theme as UiKitTheme).amount;

	return css`
		display: flex;

		padding: 4px 8px;
		width: fit-content;
		${disabled &&
		`
      border-radius: 8px;
      ${wrapper.disabled.styles};
    `}
	`;
});

export const OldValue = styled(Text)((props) => {
	const { theme } = props;
	const { oldValue } = (theme as UiKitTheme).amount;

	return css`
		${oldValue.styles};
	`;
});
