import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BaseRow } from '../../ui-kit/base';
import { UiKitTheme } from '../../ui-kit/@themes';

interface RowProps {
  disabled: boolean;
}

export const Row = styled(BaseRow)<RowProps>((props) => {
  const { disabled, theme } = props;
  const { row } = (theme as UiKitTheme).infoRow;

  return css`
    ${row.default.styles}
    ${disabled && row.disabled.styles}
  `;
});

export const IconBox = styled.div((props) => {
  const { theme } = props;
  const { iconBox } = (theme as UiKitTheme).infoRow;

  return css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    ${iconBox.styles}
  `;
});

export const Content = styled.div(() => {
  return css`
    display: block;
    flex-grow: 1;
  `;
});

export const Title = styled.p(() => {
  return css`
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  `;
});

export const Description = styled.div((props) => {
  const { theme } = props;
  const { description } = (theme as UiKitTheme).infoRow;

  return css`
    margin: 2px 0 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    p {
      margin: 0;
    }

    ${description.styles}
  `;
});
