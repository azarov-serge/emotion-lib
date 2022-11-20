import React  from 'react';
import * as Styled from './styles';
import { BaseRowProps } from './types';
import { defaultProps } from './BaseRow.defaultProps';

export const BaseRow: React.FC<BaseRowProps> = (props) => {
	const {
		mb = defaultProps.mb,
		className,
		children,
		block = defaultProps.block,
	} = props;

	return (
		<Styled.Row className={className} mb={mb} block={block}>
			{children}
		</Styled.Row>
	);
};
