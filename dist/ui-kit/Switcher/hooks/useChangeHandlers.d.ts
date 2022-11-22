import { SwitcherProps } from '../types';
export interface UseChangeHandlersProps {
    imperativeChecked: SwitcherProps['checked'];
    onChange: SwitcherProps['onChange'];
}
export interface UseChangeHandlersReturn {
    checked: boolean;
    loading: boolean;
    handleChange: () => void;
}
export declare const useChangeHandlers: (props: UseChangeHandlersProps) => UseChangeHandlersReturn;
