import { ChangeEvent } from 'react';
import { StepperProps } from '@/ui-kit/Stepper/types';
declare type IUseChangeHandlers = Required<Pick<StepperProps, 'min' | 'max' | 'step'>> & Pick<StepperProps, 'initialValue' | 'onChange'>;
export declare const useChangeHandlers: (props: IUseChangeHandlers) => {
    value: number;
    decrease: () => void;
    increase: () => void;
    handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};
export {};
