import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { RadioProps } from './types';
import { UiKitTheme } from '../@themes';

type WrapperProps = { mb: number };
export const Wrapper = styled.div<WrapperProps>((props) => {
	const { mb } = props;

	return css`
		display: inline-block;
		margin-bottom: ${mb}px;
	`;
});

type LabelProps = Pick<RadioProps, 'checked' | 'disabled' | 'error'>;
export const Label = styled.label<LabelProps>((props) => {
	const { disabled, error, theme } = props;
	const { label } = (theme as UiKitTheme).radio;

	return css`
		display: flex;
		align-items: center;
		column-gap: 12px;
		cursor: pointer;
		${label.default.styles}
		${disabled && label.disabled.styles}
    ${error && label.error.styles}
	`;
});

type DotProps = Pick<RadioProps, 'checked' | 'disabled' | 'error'>;
export const Dot = styled.span<DotProps>((props) => {
	const { checked, disabled, error, theme } = props;
	const { dot } = (theme as UiKitTheme).radio;

	const dotOpacity = checked || error ? 1 : 0;

	const boxShadow =
		checked && !disabled && !error && 'box-shadow: 0px 4px 15px 0px #09090A40';

	return css`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		width: 24px;
		height: 24px;
		padding: 4px;
		border-radius: 50%;

		${boxShadow};

		&::before {
			content: '';
			flex-grow: 1;
			width: 100%;
			height: 100%;
			display: block;
			border-radius: 50%;
			opacity: ${dotOpacity};
			transition: opacity 0.2s ease-out;
		}

		${dot.default.styles}
		${checked && dot.checked.styles}
    ${disabled && dot.disabled.styles}
    ${error && dot.error.styles}
    ${!checked && `&::before {
			background-color: transparent;
		}`}
	`;
});

export const Input = styled.input(() => {
	return css`
		display: none;
	`;
});
