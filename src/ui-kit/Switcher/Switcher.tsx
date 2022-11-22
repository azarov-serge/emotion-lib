import React from 'react';
import { useId } from '../../hooks/useId';
import * as Styled from './styles';
import { SwitcherProps } from './types';
import { defaultProps } from './Switcher.defaultProps';
import { useChangeHandlers } from './hooks/useChangeHandlers';

export const Switcher: React.FC<SwitcherProps> = (props) => {
	const {
		label,
		checked: imperativeChecked = defaultProps.checked,
		disabled: imperativeDisabled,
		onChange,
		mb = defaultProps.mb,
	} = props;

	const id = useId();
	const { loading, checked, handleChange } = useChangeHandlers({
		imperativeChecked,
		onChange,
	});

	const disabled = imperativeDisabled || loading;

	return (
		<Styled.Wrapper mb={mb}>
			<Styled.Input
				id={id}
				type={'checkbox'}
				checked={checked}
				onChange={handleChange}
				disabled={disabled}
			/>
			<Styled.Label htmlFor={id} isDisabled={disabled} isChecked={checked}>
				<Styled.Knob isChecked={checked} isDisabled={disabled} label={label}>
					{loading && (
						<Styled.Spinner
							rotate
							name="spinner"
							width={24}
							height={24}
							checked={checked}
						/>
					)}
				</Styled.Knob>
			</Styled.Label>
			{label && <Styled.Text isDisabled={disabled}>{label}</Styled.Text>}
		</Styled.Wrapper>
	);
};
