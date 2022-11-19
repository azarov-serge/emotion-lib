import React, { FC, useEffect } from 'react';
import { Dialog, modalStore } from '../base';
import { Icon } from '../Icon';
import * as Styled from './styles';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props;

  useEffect(() => {
    modalStore.setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Styled.Wrapper isOpen={isOpen}>
        {children}
        {onClose && (
          <Styled.CloseButton onClick={onClose}>
            <Icon name="closeFill" />
          </Styled.CloseButton>
        )}
      </Styled.Wrapper>
    </Dialog>
  );
};
