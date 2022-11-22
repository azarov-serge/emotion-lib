import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';
import { MessageProps } from 'ui-kit';

const DEFAULT_DURATION = 3 * 1000; // 5 sec

type Messages = Record<string, MessageProps & { date: number }>;
type AddedMessage = Omit<MessageProps, 'isOpen'>;
export interface MessageContextProps {
	// [message.id]: message
	messages: Messages;
	addMessage?: (message: AddedMessage) => void;
}

const initialMessageContext = {
	messages: {},
};

export const MessageContext = createContext<MessageContextProps>(
	initialMessageContext
);

export const MessageProvider = (
	props: PropsWithChildren<{ duration?: number }>
): JSX.Element => {
	const { children } = props;
	const [messages, setMessages] = useState<Messages>({});
	const [removeId, setRemoveId] = useState<string>('');

	useEffect(() => {
		if (removeId) {
			const { duration = DEFAULT_DURATION } = messages[removeId];

			setTimeout(() => {
				setMessages((prevMessages) => {
					return {
						...prevMessages,
						[removeId]: {
							...prevMessages[removeId],
							isOpen: false,
						},
					};
				});
			}, duration);
		}
	}, [removeId]);

	const closeMessage = (id: string) => {
		setMessages((prevMessages) => {
			return {
				...prevMessages,
				[id]: {
					...prevMessages[id],
					isOpen: false,
				},
			};
		});
	};

	const addMessage = (item: AddedMessage) => {
		const { id, duration = DEFAULT_DURATION } = item;
		const message = {
			...item,
			duration,
			isOpen: true,
			date: Number(new Date()),
		};

		setMessages({
			...messages,
			[id]: message,
		});

		setTimeout(() => {
			closeMessage(id);
		}, duration);
	};

	const value = { messages, addMessage };

	return (
		<MessageContext.Provider value={value}>{children}</MessageContext.Provider>
	);
};

export const useMessages = (): Required<MessageContextProps> => {
	const { messages, addMessage = () => {} } = useContext(MessageContext);

	return { messages, addMessage };
};
