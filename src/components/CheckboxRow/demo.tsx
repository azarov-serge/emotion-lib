import React from 'react';
import { CheckboxRow } from './CheckboxRow';

export const CheckboxRowDemo = () => {
	return (
		<div>
			<CheckboxRow mb={20} price={'0'} checkBoxProps={{ label: 'Label' }} />
			<CheckboxRow
				mb={20}
				price={'0'}
				checkBoxProps={{ label: 'Label', checked: true }}
			/>
			<CheckboxRow
				mb={20}
				price={'0'}
				checkBoxProps={{ label: 'Label', disabled: true }}
			/>
			<CheckboxRow
				mb={20}
				price={'0'}
				checkBoxProps={{ label: 'Label', checked: true, error: true }}
			/>
			<CheckboxRow mb={20} checkBoxProps={{ label: 'Label' }} />
		</div>
	);
};
