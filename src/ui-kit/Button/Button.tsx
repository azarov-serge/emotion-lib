import React, { FC } from 'react';
import * as Styled from './styles';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => {
	const { kind = 'primary', children, ...rest } = props;

	return <Styled.Button kind={kind} {...rest}>{children}</Styled.Button>;
};
