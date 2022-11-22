import React, { FC, useEffect } from 'react';
import { Dialog } from '../base';
import { Icon } from '../Icon';
import { useModal } from '../../contexts';
import * as Styled from './styles';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props;
  const { setIsOpen } = useModal();

  useEffect(() => {
    setIsOpen(isOpen);
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
