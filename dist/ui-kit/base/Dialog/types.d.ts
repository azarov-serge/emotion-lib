import { ReactNode } from 'react';
export declare type DialogProps = {
    isOpen: boolean;
    children: ReactNode;
    onClose?: () => void;
};
