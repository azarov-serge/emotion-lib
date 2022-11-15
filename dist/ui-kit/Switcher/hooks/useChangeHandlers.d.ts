import { CheckBoxProps } from '@/ui-kit/Checkbox/types';
export interface UseChangeHandlersProps {
    imperativeChecked: CheckBoxProps['checked'];
    onChange: CheckBoxProps['onChange'];
}
export interface UseChangeHandlersReturn {
    checked: boolean;
    loading: boolean;
    handleChange: () => void;
}
export declare const useChangeHandlers: (props: UseChangeHandlersProps) => UseChangeHandlersReturn;
