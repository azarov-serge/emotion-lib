import React from 'react';
import * as Styled from './styles';
import { defaultProps } from './Button.defaultProps';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    onClick,
    children,
    loading = defaultProps.loading,
    size = defaultProps.size,
    icon,
    iconProps,
    kind = defaultProps.kind,
    ...rest
  } = props;

  return (
    <Styled.Button
      kind={kind}
      size={size}
      isLoading={loading}
      onClick={onClick}
      {...rest}
    >
      <Styled.Spin size={size} isLoading={loading} kind={kind} icon={icon}>
        <span />
      </Styled.Spin>
      {!loading && icon && <Styled.ButtonIcon name={icon} {...iconProps } />}
      {children}
    </Styled.Button>
  );
};
