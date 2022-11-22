import { ReactNode } from 'react';
import { InfoProps } from '../types';
interface UseDescription {
    (description: InfoProps['description']): ReactNode;
}
export declare const useDescription: UseDescription;
export {};
