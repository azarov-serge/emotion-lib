import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Icon } from '@/ui-kit';
import { CheckBoxProps } from '@/ui-kit/Checkbox/types';
import { UiKitTheme } from '@/ui-kit/@themes/types';

type WrapperProps = Required<Pick<CheckBoxProps, 'mb' | 'block'>>;
export const Wrapper = styled.div<WrapperProps>((props) => {
	const { mb, block } = props;
	const display = block ? 'flex' : 'inline-flex';

	return css`
		display: ${display};
		margin-bottom: ${mb}px;
	`;
});

type LabelProps = Pick<CheckBoxProps, 'checked' | 'disabled' | 'error'>;
export const Label = styled.label<LabelProps>((props) => {
	const { checked, disabled, error, theme } = props;

	const { borderColor: borderColorMap, color: labelColorMap } = (
		theme as UiKitTheme
	).checkBox.label;

	let color: string = borderColorMap.normal;
	let labelColor: string = labelColorMap.normal;

	if (disabled) {
		color = borderColorMap.disabled;
		labelColor = labelColorMap.disabled;
	}

	if (checked) {
		color = borderColorMap.checked;
	}

	if (error) {
		color = borderColorMap.error;
		labelColor = labelColorMap.error;
	}

	return css`
		display: flex;
		align-items: center;
		gap: 12px;
		color: ${color};
		cursor: pointer;

		> span {
			color: ${labelColor};
		}

		&:hover:not([disabled]) {
			color: ${labelColor};
		}
	`;
});

type TickProps = Pick<
	CheckBoxProps,
	'checked' | 'disabled' | 'error' | 'indeterminate'
>;

export const Tick = styled(Icon)<TickProps>((props) => {
	const { checked, disabled, error, theme } = props;
	const { tickColor: tickColorMap } = (theme as UiKitTheme).checkBox.box;

	const opacity = Number(checked);
	let tickColor: string = tickColorMap.normal;

	if (disabled && checked) {
		tickColor = tickColorMap.disabledChecked;
	}

	if (error) {
		tickColor = tickColorMap.error;
	}

	return css`
		position: absolute;
		left: -1px;
		top: -1px;
		display: block;
		opacity: ${opacity};
		transition: opacity ease-out;

		svg {
			fill: ${tickColor};
		}
	`;
});

type BoxProps = Pick<
	CheckBoxProps,
	'checked' | 'disabled' | 'error' | 'indeterminate'
>;
export const Box = styled.div<BoxProps>((props) => {
	const { checked, disabled, error, indeterminate, theme } = props;

	const {
		bgColor: bgMap,
		indeterminateColor: indeterminateColorMap,
	} = (theme as UiKitTheme).checkBox.box;

	let bgColor: string = bgMap.normal;
	let indeterminateColor: string = indeterminateColorMap.normal;

	if (disabled) {
		bgColor = bgMap.disabled;
		indeterminateColor = indeterminateColorMap.disabled;
	}

	if (checked) {
		bgColor = bgMap.checked;
	}

	if (disabled && checked) {
	}

	if (error) {
		bgColor = bgMap.error;
		indeterminateColor = indeterminateColorMap.error;
	}

	const shadow =
		checked && !disabled && 'box-shadow: 0px 4px 15px 0px #09090A40;';

	const displayIndeterminate = indeterminate && !checked ? 'block' : 'none';

	return css`
		position: relative;
		display: block;
		box-sizing: border-box;
		width: 24px;
		height: 24px;
		border: 1px solid currentColor;
		border-radius: 8px;
		background-color: ${bgColor};
		transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
		${shadow};

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: ${displayIndeterminate};
			width: 12px;
			height: 12px;
			border-radius: 4px;
			background-color: ${indeterminateColor};
		}
	`;
});

export const Input = styled.input(() => {
	return css`
		display: none;
	`;
});
