import React, { FC, useEffect } from 'react';
import { useModal } from '../../contexts';
import * as Styled from './styles';
import { SystemModalProps } from './types';
import { Portal } from '../base';

export const SystemModal: FC<SystemModalProps> = (props) => {
  const { isOpen, title, text, actions } = props;
  const { setIsOpen } = useModal();

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <Portal>
      <Styled.Wrapper isOpen={isOpen} tabIndex={1}>
        <Styled.Container isOpen={isOpen}>
          <Styled.Title>{title}</Styled.Title>
          {text && <Styled.Text>{text}</Styled.Text>}
          {actions.map((action, index) => {
            const { id, caption, onClick } = action;

            return (
              <Styled.Action
                key={id}
                autoFocus={index === 0}
                tabIndex={1}
                onClick={onClick}
              >
                {caption}
              </Styled.Action>
            );
          })}
        </Styled.Container>
      </Styled.Wrapper>
    </Portal>
  );
};
