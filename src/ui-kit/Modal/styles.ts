import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { UiKitTheme } from '../@themes';

type WrapperProps = { isOpen: boolean };
export const Wrapper = styled.div<WrapperProps>((props) => {
  const { isOpen, theme } = props;
  const { wrapper } = (theme as UiKitTheme).modal;

  return css`
    position: fixed;
    padding: 16px;
    min-width: 327px;
    
    box-shadow: 0px 0px 35px rgba(9, 9, 10, 0.1);
    border-radius: 32px;
    opacity: ${isOpen ? 1 : 0};
    transition: 0.3s;
    ${wrapper.styles}
  `;
});

export const CloseButton = styled.button((props) => {
  const { theme } = props;
  const { closeButton } = (theme as UiKitTheme).modal;

  return css`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: none;
    background: transparent;
    ${closeButton.styles}
  `;
});
