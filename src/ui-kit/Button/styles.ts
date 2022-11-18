import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { rotateAnimation } from '../@constants';
import { ComponentSize } from '../@types';
import { Icon } from '../Icon';
import { UiKitTheme } from '../@themes';
import { defaultProps } from './Button.defaultProps';
import { ButtonProps } from './types';

export interface StyledButtonProps extends ButtonProps {
	isLoading: boolean;
}

export const Button = styled.button<Omit<StyledButtonProps, 'loading'> & { isLoading: boolean; }>((props) => {
	const {
		size,
		isLoading,
		type = defaultProps.type,
		disabled = defaultProps.disabled,
		block = defaultProps.block,
		mb = defaultProps.mb,
		theme,
	} = props;

	const { button } = theme as UiKitTheme;

	const sizeStyles = button[size!];

	const defaultStyles = sizeStyles.default;
	const typeStyles = sizeStyles[type];
	const loadingStyle = sizeStyles.loading[type];
	const disabledStyle = sizeStyles.disabled;

	const marginRight = size === ComponentSize.small ? 4 : 8;

	return css`
		border: none;
		border: 2px solid transparent;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-right: ${marginRight}px;
		margin-bottom: ${mb}px;

		cursor: pointer;
		transition: 0.3s;
		backdrop-filter: blur(80px);
		${defaultStyles.styles}
		${typeStyles.styles}
		${isLoading && loadingStyle.styles}
		${disabled &&
		`
			${disabledStyle.styles}
			cursor: not-allowed;
		`}

		${block &&
		`
       width: 100%;
    `}

    & svg path {
			fill: currentColor;
		}
	`;
});

export const ButtonIcon = styled(Icon)<Pick<StyledButtonProps, 'size'>>(
	(props) => {
		const { size } = props;

		const marginRight = size === ComponentSize.small ? 4 : 8;

		return css`
			margin-top: -4px;
			margin-right: ${marginRight}px;
			margin-bottom: -4px;
		`;
	}
);

type SpinProps = Pick<ButtonProps, 'size' | 'type' | 'icon'> & {
	isLoading?: boolean;
};

export const Spin = styled.span<SpinProps>((props) => {
	const { isLoading, size, type = defaultProps.type, theme } = props;
	const { spin } = (theme as UiKitTheme).button;

	if (!isLoading) {
		return css``;
	}

	let width = 0;
	let marginRight = size === ComponentSize.small ? 8 : 12;

	if (isLoading) {
		width = 18;
	} else {
		marginRight = 0;
	}

	return css`
		display: inline-flex;
		overflow: hidden;

		width: ${width}px;

		margin-right: ${marginRight}px;

		transition: 0.3s;
		animation: spin 1.1s linear infinite;

		${rotateAnimation}
		span {
			width: ${width}px;
			height: ${width}px;

			border-radius: 50%;
			background-color: transparent;
			${spin[type].styles}
		}
	`;
});
