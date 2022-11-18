import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Icon } from '../Icon';
import { CheckboxProps } from './types';
import { UiKitTheme } from '../@themes/types';

type WrapperProps = Required<Pick<CheckboxProps, 'mb' | 'block'>>;
export const Wrapper = styled.div<WrapperProps>((props) => {
	const { mb, block } = props;
	const display = block ? 'flex' : 'inline-flex';

	return css`
		display: ${display};
		margin-bottom: ${mb}px;
	`;
});

type LabelProps = Pick<CheckboxProps, 'checked' | 'disabled' | 'error'>;
export const Label = styled.label<LabelProps>((props) => {
	const { checked, disabled, error, theme } = props;
	const { label } = (theme as UiKitTheme).checkbox;

	return css`
		display: flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		${label.default.styles}
		${disabled && label.disabled.styles}
		${checked && label.checked.styles}
		${error && label.error.styles}
	`;
});

type TickProps = Pick<CheckboxProps, 'checked' | 'disabled' | 'error'>;

export const Tick = styled(Icon)<TickProps>((props) => {
	const { checked, disabled, error, theme } = props;
	const { tick } = (theme as UiKitTheme).checkbox;

	const opacity = Number(checked);

	return css`
		position: absolute;
		left: -1px;
		top: -1px;
		display: block;
		opacity: ${opacity};
		transition: opacity ease-out;

		svg {
			${tick.default.styles};
			${disabled && checked && tick.disabledChecked.styles};
			${error && tick.error.styles};
		}
	`;
});

type BoxProps = Pick<
	CheckboxProps,
	'checked' | 'disabled' | 'error' | 'indeterminate'
>;
export const Box = styled.div<BoxProps>((props) => {
	const { checked, disabled, error, indeterminate, theme } = props;
	const { box } = (theme as UiKitTheme).checkbox;

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
		transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
		${shadow};
		${box.default.styles}
		${disabled && box.disabled.styles}
		${checked && box.checked.styles}
		${error && box.error.styles}

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
		}
	`;
});

export const Input = styled.input(() => {
	return css`
		display: none;
	`;
});
