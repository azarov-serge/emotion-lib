import React, { useState } from 'react';
import { useMessages } from '../../contexts';
import { useId } from '../../hooks';
import { Button } from '../Button';
import { MessageStatus } from './types';

export const MessagesDemo = () => {
  const { addMessage } = useMessages();
  const [id, setId] = useState(0);
  const addNewMessage = (status: MessageStatus) => {
    const messageId = useId();

    addMessage({
      message: `A ${status} message id(${messageId})`,
      id: messageId,
      status,
    });

    setId(id + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button onClick={() => addNewMessage(MessageStatus.success)}>
        Success message
      </Button>
      <Button onClick={() => addNewMessage(MessageStatus.error)}>
        Error message
      </Button>
      <Button onClick={() => addNewMessage(MessageStatus.warning)}>
        Warning message
      </Button>
    </div>
  );
};
