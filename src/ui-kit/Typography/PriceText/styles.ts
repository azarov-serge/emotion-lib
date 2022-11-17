import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {UiKitTheme} from '../../@themes';
import { defaultProps } from './PriceText.defaultProps';
import type { PriceTextProps } from './types';


export const PriceText = styled.span<PriceTextProps>((props) => {
  const {
    underline,
    deleted,
    block,
    align = defaultProps.align,
    size = defaultProps.size,
    theme,
  } = props;

  const { priceText } = (theme as UiKitTheme);

  return css`
    display: ${block ? 'block' : 'inline'};
    ${priceText[size!].styles}
    text-align: ${align};
    ${underline && 'text-decoration: underline'}
    ${deleted && 'text-decoration: line-through'}
  `;
});
