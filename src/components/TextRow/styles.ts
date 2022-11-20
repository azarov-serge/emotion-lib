import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BaseRow } from '../../ui-kit/base';
import { UiKitTheme } from '../../ui-kit/@themes';
import { TextRowProps } from './types';

type RowProps = Pick<TextRowProps, 'disabled'>;
export const Row = styled(BaseRow)<RowProps>((props) => {
  const { disabled, theme } = props;
  const { row } = (theme as UiKitTheme).textRow;

  return css`
    flex-wrap: wrap;
    align-items: flex-start;
    ${row.default.styles}
    ${disabled && row.disabled.styles}
  `;
});

export const Header = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
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

export const Label = styled.span(() => {
  return css`
    margin: 0;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
  `;
});

export const Description = styled.p((props) => {
  const { theme } = props;
  const { description } = (theme as UiKitTheme).textRow;

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
