import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { InputState } from './constants';
import { InputBaseProps, Validation, ValidationStatus } from './types';
import { UiKitTheme } from '../../@themes';

const getInputState = (
	validation?: Validation,
	disabled?: boolean
): InputState => {
	if (disabled) {
		return InputState.disabled;
	}

	if (validation) {
		return validation.status === ValidationStatus.success
			? InputState.success
			: InputState.error;
	}

	return InputState.default;
};

export const Wrapper = styled.div<{ mb?: number }>`
	width: 100%;
	margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
`;

export const Label = styled.label<InputBaseProps>((props) => {
	const { required, theme } = props;
	const { label } = (theme as UiKitTheme).inputBase;

	return css`
		position: relative;
		display: block;

		margin-bottom: 8px;

		font-size: 17px;
		font-weight: 400;
		font-style: normal;
		line-height: 22px;

		${label.styles}

		&::after {
			position: absolute;
			top: 0;

			display: ${required ? 'inline' : 'none'};

			content: '*';

			font-size: 12px;
		}
	`;
});

export const Message = styled.div<InputBaseProps>((props) => {
	const { validation, disabled, theme } = props;

	const inputState = getInputState(validation, disabled);
	const { message } = (theme as UiKitTheme).inputBase;

	return css`
		display: flex;
		align-items: flex-start;

		width: 100%;
		padding-top: 4px;

		font-size: 12px;
		line-height: 18px;

		${message[inputState].styles}
	`;
});

export const InputWrapper = styled.div<InputBaseProps>`
	position: relative;

	width: 100%;
`;

export const InputBase = (props: InputBaseProps) => {
	const { validation, disabled, theme } = props;

	const inputState = getInputState(validation, disabled);

	const { input } = (theme as UiKitTheme).inputBase;

	return css`
		width: 100%;

		min-width: 240px;
		padding: 16px;

		cursor: ${disabled ? 'not-allowed' : 'inherit'};
		transition: 0.3s;

		border-radius: 16px;

		font-size: 16px;
		line-height: 16px;

		&,
		&:focus,
		&:focus-visible {
			outline: none;
		}

		${input[inputState].styles}
	`;
};
