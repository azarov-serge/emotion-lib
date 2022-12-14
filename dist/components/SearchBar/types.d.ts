import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
declare type InputHtmlProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export interface SerachBarProps extends InputHtmlProps {
    delay: number;
    loading?: boolean;
    search: (value: string) => Promise<void>;
}
export {};
