import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Row as BaseRow } from '../../ui-kit/base/Row';
import { CheckboxProps } from '../../ui-kit/Checkbox';
import { UiKitTheme } from '../../ui-kit/@themes';

type RowProps = Pick<CheckboxProps, 'disabled' | 'error'>;

export const Row = styled(BaseRow)<RowProps>((props) => {
	const { disabled, error, theme } = props;
	const { row } = (theme as UiKitTheme).checkboxRow;

	return css`
		${row.default.styles};
		${error && row.error.styles};
		${disabled && row.disabled.styles};
	`;
});

type PriceProps = Pick<CheckboxProps, 'disabled'>;

export const Price = styled.span<PriceProps>((props) => {
	const { disabled, theme } = props;
	const { price } = (theme as UiKitTheme).checkboxRow;

	return css`
		padding: 4px 8px;
		border-radius: 8px;
		${price.default.styles};
		${disabled && price.disabled.styles};
	`;
});
