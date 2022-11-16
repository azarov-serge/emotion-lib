import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UiKitTheme } from '../theme';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>((props) => {
	const { kind, theme } = props;
	const { primary, secondary } = theme as UiKitTheme;

	return css`
		padding: 10px 15px;
		border: none;
		border-radius: 5px;
		background-color: ${kind === 'primary' ? primary : secondary};
		color: white;
	`;
});
