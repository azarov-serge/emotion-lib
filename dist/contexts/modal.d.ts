import React, { PropsWithChildren } from 'react';
export interface ModalContextProps {
    isOpen: boolean;
    setIsOpen?: (value: boolean) => void;
    toggle?: () => void;
}
export declare const ModalContext: React.Context<ModalContextProps>;
export declare const ModalProvider: (props: PropsWithChildren<{}>) => JSX.Element;
export declare const useModal: () => Required<ModalContextProps>;
