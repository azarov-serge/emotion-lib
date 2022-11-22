import React from 'react';
import { Icon, IconNameEnum } from '../Icon';
import * as Styled from './styles';
import { MessageProps } from './types';
import { MessageStatus } from './types';

const iconMap: Record<MessageStatus, keyof typeof IconNameEnum> = {
  [MessageStatus.success]: 'checkGreen',
  [MessageStatus.warning]: 'warningYellow',
  [MessageStatus.error]: 'closeRed',
};

export const Message: React.FC<MessageProps> = (props) => {
  const { message, status, isOpen } = props;

  const icon = iconMap[status];

  return (
    <Styled.MessageWrapper isOpen={isOpen}>
      {icon && <Icon name={icon} />}
      <Styled.Text>{message}</Styled.Text>
    </Styled.MessageWrapper>
  );
};
