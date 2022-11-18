import React from 'react';
import { Checkbox } from '../../ui-kit/Checkbox';
import { PriceText } from '../../ui-kit';
import { defaultProps } from './CheckboxRow.defaultProps';
import * as Styled from './styles';
import { CheckboxRowProps } from './types';

export const CheckBoxRow: React.FC<CheckboxRowProps> = (props) => {
	const {
		priceTextProps = defaultProps.priceTextProps,
		price,
		checkBoxProps,
		block,
		mb,
	} = props;
	const { disabled, error } = checkBoxProps;

	return (
		<Styled.Row disabled={disabled} error={error} block={block} mb={mb}>
			<Checkbox {...checkBoxProps} />
			{price && (
				<Styled.Price {...priceTextProps} disabled={disabled}>
					<PriceText>{price}</PriceText>
				</Styled.Price>
			)}
		</Styled.Row>
	);
};
