import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ComponentSize } from '../../@types';

interface ButtonProps {
  size: keyof typeof ComponentSize;
  mb: number;
}
export const Button = styled.button<ButtonProps>((props) => {
  const { size } = props;

  const fontStylesMap = {
    [ComponentSize.large]: css`
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
    `,
    [ComponentSize.middle]: css`
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    `,
    [ComponentSize.small]: css`
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    `,
  };

  return css`
    ${fontStylesMap[size]};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: inherit;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
  `;
});
