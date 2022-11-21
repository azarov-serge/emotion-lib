import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from '../Icon';
import { InputBase } from '../base/InputBase/styles';
import { UiKitTheme } from '../@themes';
import { SelectOptionType } from './types';

export const Wrapper = styled.div(() => {
	return css`
		position: relative;

		width: 100%;
		min-height: 40px;
	`;
});

export const Input = styled.input<{ inline?: boolean; multiple?: boolean }>(
	(props) => {
		const InputBaseStyle = InputBase(props);
		return css`
			${InputBaseStyle.styles}
			margin: ${props.multiple ? 4 : -1}px;
			width: 100%;
		`;
	}
);

export const ToggleButton = styled.button<{
	disabled?: boolean;
}>((props) => {
	const { disabled, theme } = props;
	const { toggle } = (theme as UiKitTheme).select;

	return css`
		position: absolute;
		top: 0;
		right: 16px;

		height: 100%;

		border: none;
		background: transparent;

		line-height: 0;

		${toggle.default.styles}
		${disabled && toggle.disabled.styles}
	`;
});

export const Options = styled.div<{ isOpen: boolean }>((props) => {
	const { isOpen, theme } = props;
	const { options } = (theme as UiKitTheme).select;

	return css`
		position: absolute;
		z-index: ${isOpen ? 20 : -10};
		top: calc(100% + 4px);
		right: -1px;
		left: -1px;

		display: ${isOpen ? 'block' : 'none'};
		overflow: scroll;

		height: auto;
		min-height: 60px;
		max-height: 270px;

		transition: 0.23s;
		transform: translateY(${isOpen ? 0 : 80}px);

		opacity: ${isOpen ? 1 : 0};
		border-radius: 16px;
		box-shadow: 0 8px 25px rgb(9 9 10 / 10%);
		${options.default.styles}
	`;
});

export const Option = styled.div<
	Pick<SelectOptionType, 'selected' | 'disabled'>
>((props) => {
	const { selected, disabled, theme } = props;
	const { option } = (theme as UiKitTheme).select;

	return css`
		font-size: 14px;

		margin: 8px;
		padding: 8px 12px;

		border-radius: 8px;

		${option.default.styles}
		${selected && option.selected.styles}
		${disabled && option.disabled.styles}
	`;
});

export const NoData = styled.div((props) => {
	const { theme } = props;
	const { noData } = (theme as UiKitTheme).select;

	return css`
		display: flex;
		align-items: center;
		justify-content: center;

		min-height: 60px;

		border-radius: 4px;
		${noData.default.styles}
	`;
});

export const Item = styled.div(() => {
	return css`
		position: relative;

		display: inline-block;

		padding: 10px;
		padding-right: 40px;

		border-radius: 4px;
	`;
});

export const Arrow = styled(Icon)<{
	isOpen: boolean;
	disabled?: boolean;
}>((props) => {
	const { isOpen } = props;

	return css`
		display: block !important;

		transition: 0.333s;
		transform: rotate(${isOpen ? -90 : 90}deg);

		svg {
			fill: currentcolor;
		}
	`;
});

export const Spinner = styled(Icon)((props) => {
	const { theme } = props;
	const { spinner } = (theme as UiKitTheme).select;

	return css`
		${spinner.default.styles}
	`;
});
