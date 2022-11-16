import React, { FC } from 'react';
import * as Styled from './styles';
import { PaperProps } from './types';

export const Paper: FC<PaperProps> = (props) => {
	const { children, ...rest } = props;

	return <Styled.Papper {...rest}>{children}</Styled.Papper>;
};
