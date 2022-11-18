import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from '../../../Icon';
import { JustifyType } from '../../types';
import { OptionProps } from './types';
import { UiKitTheme } from '../../../../ui-kit/@themes';

type LabelProps = Pick<
  OptionProps,
  'selfIndex' | 'justify' | 'totalItems' | 'checkedIndex'
> & {
  checked: boolean;
};

export const Label = styled.label<LabelProps>((props) => {
  const { checked, selfIndex, checkedIndex, justify, totalItems, theme } =
    props;
  const fontWeight = checked ? 600 : 500;
  const { label } = (theme as UiKitTheme).segmentedPicker.option;

  const isBeforeChecked = checkedIndex && checkedIndex - 1 === selfIndex;
  const delimiterOpacity = isBeforeChecked ? 0 : 1;
  const width = justify === JustifyType.even ? `${100 / totalItems}%` : 'auto';

  return css`
    position: relative;

    flex-grow: 1;
    width: ${width};
    cursor: pointer;
    text-align: center;
    letter-spacing: -0.006em;

    font-size: 13px;
    font-weight: ${fontWeight};
    line-height: 20px;
    border-radius: 7px;
    transition: color 0.2s ease-out;

    input {
      display: none;
    }

    &:not(:last-child)::after {
      position: absolute;
      z-index: -2;
      top: 6px;
      right: 1px;
      bottom: 6px;
      opacity: ${delimiterOpacity};

      width: 1px;

      content: '';

      border-radius: 0.5px;
      ${label.styles};
    }
  `;
});

interface ShadowTextProps {
  text: string;
}
export const ShadowText = styled.span<ShadowTextProps>((props) => {
  const { text } = props;

  return css`
    display: block;
    visibility: hidden;
    overflow: hidden;

    height: 0;

    content: '${text}';

    color: transparent;

    font-weight: 600;
  `;
});

interface TextProps {
  isNextToCheckedOrFirst: boolean;
  disabled: boolean;
  checked: boolean;
  isLoaderShown: boolean;
}

export const Text = styled.div<TextProps>((props) => {
  const {
    isNextToCheckedOrFirst,
    disabled,
    checked,
    isLoaderShown,
    theme,
  } = props;
  
  const { text } = (theme as UiKitTheme).segmentedPicker.option;


  return css`
    z-index: 0;
    display: flex;
    height: 28px;
    align-items: center;
    justify-content: center;
    padding: 0 ${isLoaderShown ? 12 : 27}px;
    ${text.default.styles};
    ${checked && text.checked.styles};
    ${disabled && text.disabled.styles};

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${isNextToCheckedOrFirst ? 0 : -2}px;
      right: 0;
      display: ${disabled ? 'none' : 'block'};
      border-radius: 7px;
      transition: opacity, background-color 0.2s ease-out;
    }
  `;
});

export const Spinner = styled(Icon)((props) => {
  const { theme } = props;
  const { spinner } = (theme as UiKitTheme).segmentedPicker.option;
  return css`
    margin-right: 6px;
    ${spinner.styles};
  `;
});
