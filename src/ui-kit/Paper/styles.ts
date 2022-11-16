import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UiKitTheme } from '../theme';

export const Papper = styled.div((props) => {
	const { theme } = props;
	const { surface} = theme as UiKitTheme;

	return css`
		padding: 25px;

		border-radius: 5px;
		background-color: ${surface};
	`;
});
