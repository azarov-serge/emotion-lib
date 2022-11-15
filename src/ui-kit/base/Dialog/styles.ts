import styled from '@emotion/styled';
import { Color } from '@/ui-kit/@constants';
import { css } from '@emotion/react';

type WrapperProps = { isOpen: boolean };

export const Wrapper = styled.div<WrapperProps>((props) => {
  const { isOpen } = props;

  return css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${isOpen ? Color.foodCity.Black_Oven : 'transparent'}50;
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transition: 0.3s;
  `;
});
