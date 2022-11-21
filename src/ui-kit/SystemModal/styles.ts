import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { UiKitTheme } from '../@themes';

type WrapperProps = { isOpen: boolean };

export const Wrapper = styled.div<WrapperProps>((props) => {
	const { isOpen } = props;

	return css`
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		visibility: ${isOpen ? 'visible' : 'hidden'};
	`;
});

type ContainerProps = { isOpen: boolean };

export const Container = styled.div<ContainerProps>((props) => {
	const { isOpen, theme } = props;
	const { container } = (theme as UiKitTheme).systemModal;

	return css`
		position: fixed;
		width: 270px;

		backdrop-filter: blur(11px);
		border-radius: 16px;
		opacity: ${isOpen ? 1 : 0};
		transition: 0.3s;

    ${container.styles};
	`;
});

export const Title = styled.p((props) => {
  const { theme } = props;
	const { title } = (theme as UiKitTheme).systemModal;

	return css`
		margin: 16px 16px 0;
		padding: 0;
		font-style: normal;
		font-weight: 600;
		font-size: 17px;
		line-height: 22px;

		text-align: center;
		letter-spacing: -0.408px;

		${title.styles};
	`;
});

export const Text = styled.p((props) => {
  const { theme } = props;
	const { text } = (theme as UiKitTheme).systemModal;

	return css`
		margin: 2px 16px 0;
		padding: 0;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;

		text-align: center;

		${text.styles}
	`;
});

export const Action = styled.button((props) => {
  const { theme } = props;
	const { action } = (theme as UiKitTheme).systemModal;

	return css`
		width: 100%;
		margin: 0;
		padding: 10px 16px;
		border: none;
		
		background: transparent;
		cursor: pointer;

		&:nth-of-type(1) {
			margin-top: 16px;
		}

		&:hover {
			font-weight: 600;
		}

		&:active {
			font-weight: 600;
		}

    ${action.styles};
	`;
});
