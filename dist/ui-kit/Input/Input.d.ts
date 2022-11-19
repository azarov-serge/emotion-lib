import React from 'react';
import { ButtonProps, InputProps } from './types';
declare type InputButtonProps = ButtonProps & {
    btn: 'left' | 'right';
};
export declare const Button: React.FC<InputButtonProps>;
export declare const Input: React.FC<InputProps>;
export {};
