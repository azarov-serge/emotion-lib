import { css } from '@emotion/react';
import { Color } from '../color';
import { OptionSegmentedPickerTheme, SegmentedPickerTheme } from '../../types';

export const option: OptionSegmentedPickerTheme = {
	label: css`
		background-color: ${Color.Black_Oven_35};
	`,
	text: {
		default: css`
			color: ${Color.Black_Oven};

			&:hover {
				color: ${Color.Black_Oven_65};

				&::before {
					opacity: 1;
					background-color: ${Color.Black_Oven_02};
				}
			}

			&:active {
				color: ${Color.Black_Oven};

				&::before {
					opacity: 1;
					background-color: ${Color.Black_Oven_10};
				}
			}
		`,
		checked: css`
			&:hover {
				&::before {
					background-color: transparent;
				}
			}

			&:active {
				&::before {
					background-color: ${Color.Black_Oven_02};
				}
			}
		`,
		disabled: css`
			color: ${Color.Black_Oven_35};
      cursor: not-allowed;
		`,
	},
	spinner: css`
		svg {
			stroke: ${Color.Black_Oven};
		}
	`,
};

export const segmentedPicker: SegmentedPickerTheme = {
	default: css`
		background-color: ${Color.Black_Oven_05};
	`,
	option,
};
