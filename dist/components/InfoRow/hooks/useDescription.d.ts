import { ReactNode } from 'react';
import { InfoRowProps } from '../types';
interface UseDescription {
    (description: InfoRowProps['description']): ReactNode;
}
export declare const useDescription: UseDescription;
export {};
