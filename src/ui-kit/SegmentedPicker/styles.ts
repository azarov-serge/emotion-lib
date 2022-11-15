import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UiKitTheme } from '@/ui-kit/@themes';

interface SliderProps {
  activeWidth: number;
  activeOffset: number;
}

export const Slider = styled.span<SliderProps>((props) => {
  const { activeWidth, activeOffset } = props;
  const displayActive = activeWidth ? 'block' : 'none';

  return css`
    position: absolute;
    top: 2px;
    left: ${activeOffset}px;
    bottom: 2px;

    display: ${displayActive};
    width: ${activeWidth}px;
    margin: 0;
    transition: left 0.2s linear, width 0.2s linear;
    border-radius: 7px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgb(9 9 10 / 25%);
  `;
});

interface WrapperProps {
  block: boolean;
  mb: number;
}

export const Wrapper = styled.div<WrapperProps>((props) => {
  const { block, mb, theme } = props;
  const { bg } = (theme as UiKitTheme).segmentedPicker;

  const displayBlock = block ? 'flex' : 'inline-flex';
  

  return css`
    position: relative;
    z-index: 0;

    display: ${displayBlock};
    align-items: stretch;
    justify-content: flex-start;

    margin-bottom: ${mb}px;
    padding: 2px;

    &::before {
      position: absolute;
      z-index: -2;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      content: '';

      border-radius: 9px;
      background-color: ${bg};
    }
  `;
});
