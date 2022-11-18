import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UiKitTheme } from '../../@themes';

type WrapperProps = { isOpen: boolean };

export const Wrapper = styled.div<WrapperProps>((props) => {
	const { isOpen, theme } = props;
	const { dialog } = theme as UiKitTheme;

	return css`
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		transition: 0.3s;
		${dialog.default.styles}
		${isOpen && dialog.opened.styles}
	`;
});
