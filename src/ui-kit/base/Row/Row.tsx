import React  from 'react';
import * as Styled from './styles';
import { RowProps } from './types';
import { defaultProps } from './Row.defaultProps';

export const Row: React.FC<RowProps> = (props) => {
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
