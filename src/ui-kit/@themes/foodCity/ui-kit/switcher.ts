import { css } from '@emotion/react';
import {
	KnobSwitcherTheme,
	LabelSwitcherTheme,
	SpinnerSwitcherTheme,
	SwitcherTheme,
	TextSwitcherTheme,
} from '../../types';
import { Color } from '../color';

const spinner: SpinnerSwitcherTheme = {
	default: css`
		svg {
			stroke: ${Color.Black_Oven_65};

			> path:nth-of-type(1) {
				stroke: ${Color.Black_Oven_10};
				opacity: 1;
			}
		}
	`,
	checked: css`
		svg {
			> path:nth-of-type(1) {
				stroke: ${Color.Black_Oven_35};
				opacity: 1;
			}
		}
	`,
};

const knob: KnobSwitcherTheme = {
	default: css`
		background-color: ${Color.White};
	`,
	disabled: css`
		background-color: ${Color.Black_Oven_02};
	`,
	disabledChecked: css`
		background-color: ${Color.Black_Oven_10};
	`,
};

const label: LabelSwitcherTheme = {
	default: css`
		background-color: ${Color.Black_Oven_10};
	`,
	checked: css`
		background-color: ${Color.Black_Oven};
	`,
	disabled: css`
		background-color: ${Color.Black_Oven_05};
	`,
	disabledChecked: css`
		background-color: ${Color.Black_Oven_35};
	`,
};

const text: TextSwitcherTheme = {
	default: css`
		color: ${Color.Black_Oven};
	`,
	disabled: css`
		color: ${Color.Black_Oven_35};
	`,
};

export const switcher: SwitcherTheme = {
	spinner,
	knob,
	label,
	text,
};
