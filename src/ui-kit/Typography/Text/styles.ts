import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {UiKitTheme} from '../../@themes';
import { defaultProps } from './Text.defaultProps';
import { type TextProps } from './types';

export const Text = styled.span<TextProps>((props) => {
  const {
    underline,
    deleted,
    strong,
    block,
    align = defaultProps.align,
    size = defaultProps.size,
    theme,
  } = props;

  const { text } = (theme as UiKitTheme);

  return css`
    display: ${block ? 'block' : 'inline'};
    ${text[size].styles}
    font-weight: ${strong ? '700' : '500'};

    text-align: ${align};
    ${underline && 'text-decoration: underline'}
    ${deleted && 'text-decoration: line-through'}
  `;
});
