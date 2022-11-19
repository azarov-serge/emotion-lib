import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {UiKitTheme} from '../../ui-kit/@themes';

interface WrapperProps {
  fill?: string;
  lineWidth?: number;
}

export const Wrapper = styled.span<WrapperProps>((props) => {
  const { fill, theme } = props;
  const { spinner } = theme as UiKitTheme

  return css`
    & svg > path {
      ${spinner.styles}
      ${fill && `stroke: ${fill};`}
    }
  `;
});
