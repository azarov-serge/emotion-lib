import { ReactNode } from 'react';
import { TextRowProps } from '../types';
interface UseDescription {
    (description: TextRowProps['description']): ReactNode;
}
export declare const useDescription: UseDescription;
export {};
