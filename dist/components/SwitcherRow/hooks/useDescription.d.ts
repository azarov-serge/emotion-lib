import { ReactNode } from 'react';
import { SwitcherRowProps } from '../types';
interface UseDescription {
    (description: SwitcherRowProps['description']): ReactNode;
}
export declare const useDescription: UseDescription;
export {};
