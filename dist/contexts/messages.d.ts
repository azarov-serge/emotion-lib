import React, { PropsWithChildren } from 'react';
import { MessageProps } from 'ui-kit';
declare type Messages = Record<string, MessageProps & {
    date: number;
}>;
declare type AddedMessage = Omit<MessageProps, 'isOpen'>;
export interface MessageContextProps {
    messages: Messages;
    addMessage?: (message: AddedMessage) => void;
}
export declare const MessageContext: React.Context<MessageContextProps>;
export declare const MessageProvider: (props: PropsWithChildren<{
    duration?: number;
}>) => JSX.Element;
export declare const useMessages: () => Required<MessageContextProps>;
export {};
