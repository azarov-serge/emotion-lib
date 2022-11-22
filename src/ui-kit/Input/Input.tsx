import React from 'react';
import { useId } from '../../hooks';
import { InputBase } from '../base/InputBase';
import { Icon } from '../Icon';
import { ButtonProps, InputProps } from './types';
import * as Styled from './styles';

type InputButtonProps = ButtonProps & {
  btn: 'left' | 'right';
};

export const Button: React.FC<InputButtonProps> = (props) => {
  const { children, btn, icon } = props;
  const StyledButton = btn === 'left' ? Styled.LeftButton : Styled.RightButton;

  return (
    <StyledButton {...props}>
      {children || (icon && <Icon name={icon} />)}
    </StyledButton>
  );
};

export const Input: React.FC<InputProps> = (props) => {
  const {
    onChange,
    placeholder,
    leftButton,
    rightButton,
    disabled,
    forwardRef,
    ...rest
  } = props;

  const id = useId();

  const handleChange = disabled ? undefined : onChange;

  return (
    <InputBase {...rest} id={id}>
      {leftButton && <Button btn="left" {...leftButton} disabled={disabled} />}
      <Styled.Input
        {...props}
        id={id}
        placeholder={placeholder}
        forwardRef={forwardRef}
        onChange={handleChange}
      />
      {rightButton && (
        <Button btn="right" {...rightButton} disabled={disabled} />
      )}
    </InputBase>
  );
};
