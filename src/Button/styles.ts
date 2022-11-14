import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>((props) => {
	const { kind } = props;

	return css`
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        background-color: ${kind === 'primary' ? 'red' : 'black'};
        color: white;
    `;
});
