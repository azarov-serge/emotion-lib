import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon, IconProps } from '../Icon';
import { UiKitTheme } from '../@themes';

interface WrapperProps {
	mb: number;
}
export const Wrapper = styled.div<WrapperProps>((props) => {
	const { mb } = props;

	return css`
		display: flex;
		align-items: center;
		gap: 12px;

		margin-bottom: ${mb}px;
	`;
});

export const Input = styled.input(() => {
	return css`
		display: none;
	`;
});

interface SpinnerProps extends IconProps {
	checked: boolean;
	theme?: UiKitTheme;
}
export const Spinner = styled(Icon)((props: SpinnerProps) => {
	const { checked, theme } = props;
	const { spinner } = (theme as UiKitTheme).switcher;

	return css`
		${spinner.default.styles}
		${checked && spinner.checked.styles}
	`;
});

interface KnobProps {
	isChecked: boolean;
	isDisabled: boolean;
	label?: string;
}
export const Knob = styled.span<KnobProps>((props) => {
	const { isChecked, isDisabled, theme } = props;
	const { knob } = (theme as UiKitTheme).switcher;

	const leftCommon = isChecked ? 'calc(100% - 30px)' : '2px';
	const leftActive = isChecked ? 'calc(100% - 36px)' : '2px';


	return css`
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 2px;
		left: ${leftCommon};
		box-sizing: border-box;
		width: 28px;
		height: 28px;
		border-radius: 14px;
		transition: left 0.2s ease-out, width 0.2s ease-out;
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06);

		${knob.default.styles}
		${isDisabled && knob.disabled.styles}
		${isDisabled && isChecked && knob.disabledChecked.styles}
	`;
});

Knob.displayName = 'Knob';

interface LabelProps {
	isChecked: boolean;
	isDisabled: boolean;
}

export const Label = styled.label<LabelProps>((props) => {
	const { isChecked, isDisabled, theme } = props;
	const { label } = (theme as UiKitTheme).switcher;

	return css`
		position: relative;
		box-sizing: border-box;
		display: block;
		width: 52px;
		height: 32px;
		border-radius: 16px;

		cursor: pointer;
		transition: background-color 0.2s ease-out;

		${label.default.styles}
		${isChecked && label.checked.styles}
		${isDisabled && label.disabled.styles}
		${isDisabled && isChecked && label.disabledChecked.styles}
	`;
});

interface TextProps {
	isDisabled: boolean;
}

export const Text = styled.span<TextProps>((props) => {
	const { isDisabled, theme } = props;
	const { text } = (theme as UiKitTheme).switcher;

	return css`
		${text.default.styles}
		${isDisabled && text.disabled.styles}
	`;
});
