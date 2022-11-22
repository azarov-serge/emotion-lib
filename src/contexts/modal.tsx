import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from 'react';

export interface ModalContextProps {
	isOpen: boolean;
	setIsOpen?: (value: boolean) => void;
	toggle?: () => void;
}

const initialModalContext = {
	isOpen: false,
};

export const ModalContext = createContext<ModalContextProps>(initialModalContext);

export const ModalProvider = (props: PropsWithChildren<{}>): JSX.Element => {
	const { children } = props;
	const [isOpenModal, setIsOpenModal] = useState(false);

	const setIsOpen = (stateModal: boolean) => {
		setIsOpenModal(stateModal);
	};

	const toggle = () => {
		setIsOpenModal(!isOpenModal);
	};

	const value = { isOpen: isOpenModal, setIsOpen, toggle };

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};

export const useModal = (): Required<ModalContextProps> => {
	const {
		isOpen,
		setIsOpen = () => {},
		toggle = () => {},
	} = useContext(ModalContext);

	return { isOpen, setIsOpen, toggle };
};
