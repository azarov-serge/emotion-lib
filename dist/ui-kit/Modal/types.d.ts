import { ReactNode } from 'react';
export declare type ModalProps = {
    /** открыто */
    isOpen: boolean;
    children: ReactNode;
    onClose?: () => void;
};
