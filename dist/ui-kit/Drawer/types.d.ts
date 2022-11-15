import { ReactNode } from 'react';
export declare type Position = 'top' | 'bottom' | 'left' | 'right';
export declare type DrawerProps = {
    /** открыт */
    isOpen: boolean;
    /** позиционирование контейнера контента отсносительно экрана */
    position?: Position;
    children: ReactNode;
    onClose?: () => void;
};
