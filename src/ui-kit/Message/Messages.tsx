import React from 'react';
import { Transition } from 'react-transition-group';
import { useMessages } from '../../contexts';
import { Message } from './Message';
import * as Styled from './styles';
import type { MessageProps } from './types';

const duration = 350;

const defaultStyle = {
	transition: `${duration}ms ease-in-out`,
	maxHeight: 0,
	opacity: 0,
	position: 'relative',
};

const transitionStyles = {
	entering: { maxHeight: 300, opacity: 1 },
	entered: { maxHeight: 300, opacity: 1 },
	exiting: { maxHeight: 0, opacity: 0 },
	exited: { maxHeight: 0, opacity: 0, display: 'none' },
};

export const Messages = () => {
	const { messages: messagesState } = useMessages();

	const messages: MessageProps[] = Object.values(messagesState);

	if (messages.length === 0) {
		return null;
	}

	return (
		<Styled.MessagesWrapper>
			{messages.map((message: MessageProps) => {
				return (
					<Transition
						key={`transition-${message.id}`}
						in={message.isOpen}
						timeout={duration}
					>
						{(state) => (
							<div
								key={`div-${message.id}`}
								style={{
									...defaultStyle,
									// @ts-ignore
									...transitionStyles[state],
								}}
							>
								<Message key={`message-${message.id}`} {...message} />
							</div>
						)}
					</Transition>
				);
			})}
		</Styled.MessagesWrapper>
	);
};
